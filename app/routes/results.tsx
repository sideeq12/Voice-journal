import type { Route } from "./+types/results";
import { BottomNav } from "~/components/BottomNav";
import { IoDocument, IoCalendar, IoTime, IoCheckmarkCircle } from "react-icons/io5";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Results - Voixera" },
    { name: "description", content: "View your transcription results" },
  ];
}

export default function Results() {
  // Mock data for demonstration
  const mockResults = [
    {
      id: 1,
      title: "Morning Thoughts",
      date: "2024-11-10",
      time: "09:30 AM",
      preview: "Today was a great day. I woke up feeling energized and ready to tackle my goals...",
      status: "completed",
    },
    {
      id: 2,
      title: "Evening Reflection",
      date: "2024-11-09",
      time: "08:15 PM",
      preview: "Reflecting on the week that passed. There were challenges, but also many victories...",
      status: "completed",
    },
    {
      id: 3,
      title: "Quick Note",
      date: "2024-11-08",
      time: "02:45 PM",
      preview: "Just a quick reminder to follow up on the project discussion from this morning...",
      status: "completed",
    },
  ];

  return (
    <main className="min-h-screen bg-black pb-20">
      {/* Header */}
      <header className="bg-gray-900 shadow-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Your Results</h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              View all your transcriptions
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {mockResults.length > 0 ? (
          <div className="space-y-4">
            {mockResults.map((result) => (
              <div
                key={result.id}
                className="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-800 hover:border-green-700/50 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 border border-green-700/50">
                    <IoDocument className="text-green-400 text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {result.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-3 line-clamp-2">
                      {result.preview}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <IoCalendar className="text-green-400" />
                        <span>{result.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoTime className="text-green-400" />
                        <span>{result.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoCheckmarkCircle className="text-green-400" />
                        <span className="capitalize">{result.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-800">
              <IoDocument className="text-gray-600 text-4xl sm:text-5xl" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              No Results Yet
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 px-4">
              Start by uploading or recording an audio file to see your transcriptions here.
            </p>
            <a
              href="/start"
              className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg shadow-orange-900/50"
            >
              Start Recording
            </a>
          </div>
        )}

        {/* Stats Card */}
        <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 border border-gray-800">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Your Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                {mockResults.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">
                7
              </div>
              <div className="text-xs sm:text-sm text-gray-400">This Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1">
                24
              </div>
              <div className="text-xs sm:text-sm text-gray-400">This Month</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
