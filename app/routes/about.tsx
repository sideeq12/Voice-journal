import type { Route } from "./+types/about";
import { BottomNav } from "~/components/BottomNav";
import { IoSparkles, IoShieldCheckmark, IoRocket, IoHeart } from "react-icons/io5";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Voixera" },
    { name: "description", content: "Learn more about Voixera" },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen bg-black pb-20">
      {/* Header */}
      <header className="bg-gray-900 shadow-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl sm:text-3xl">V</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">About Voixera</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-8">
          {/* Mission */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <IoSparkles className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Voixera empowers you to capture your thoughts effortlessly through voice.
              We believe that journaling should be natural, accessible, and insightful.
              Our AI-powered platform transforms your spoken words into meaningful text,
              summaries, and actionable insights.
            </p>
          </div>

          {/* Features */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Why Choose Voixera?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 border border-green-700/50">
                  <IoRocket className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">
                    This is typical project for hackathon purpose only.
                    It compresses your voice notes into text almost instantly, so you can focus on what matters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 border border-green-700/50">
                  <IoShieldCheckmark className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Free</h3>
                  <p className="text-gray-400">
                    Your personal thoughts are encrypted and not stored or shared with anyone.
                    it works and cleared all data after session ends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 border border-green-700/50">
                  <IoSparkles className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">AI-Powered Insights</h3>
                  <p className="text-gray-400">
                    Get intelligent summaries, sentiment analysis, and emotional insights
                    that help you understand yourself better.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Powered by Mistral AI and Assembly API</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Voixera uses state-of-the-art artificial intelligence and natural language
              processing to deliver accurate transcriptions and meaningful insights.
              Our technology continuously learns and improves to better serve you.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm font-medium border border-green-700/50">
                Speech Recognition
              </span>
              <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm font-medium border border-green-700/50">
                NLP
              </span>
              <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm font-medium border border-green-700/50">
                Sentiment Analysis
              </span>
              <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm font-medium border border-green-700/50">
                AI Summarization
              </span>
            </div>
          </div>

          {/* Made with love */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 text-center">
            <IoHeart className="text-red-500 text-4xl sm:text-5xl mx-auto mb-4" />
            <p className="text-gray-300 text-base sm:text-lg">
              Made with love for people who want to capture their thoughts and grow.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              © 2024 Voixera. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
