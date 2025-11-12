import { Link } from "react-router";
import { BottomNav } from "~/components/BottomNav";

export function Welcome() {
  return (
    <main className="min-h-screen bg-black pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl sm:text-3xl">V</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Voixera</h1>
            </div>
            <p className="text-xl sm:text-2xl font-light max-w-3xl px-4 text-gray-200">
              Your AI-Powered Journaling Companion
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl px-4">
              Transform your thoughts into insights. Speak naturally, and let AI convert your audio into text,
              summaries, and emotional intelligence that evolves with you.
            </p>
            <Link
              to="/start"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/50 inline-block"
            >
              Start Demo
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Features Section - Audio to Text & Summary */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            Effortless Audio Journaling
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Simply speak your mind. We handle the rest.
          </p>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-green-900/30 p-3 rounded-lg flex-shrink-0 border border-green-700/50">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Voice-to-Text Conversion</h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    Advanced AI transcription that captures every word with incredible accuracy.
                    No typing required—just speak naturally.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-green-900/30 p-3 rounded-lg flex-shrink-0 border border-green-700/50">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Intelligent Summaries</h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    Get concise, meaningful summaries of your entries. Perfect for quick reviews
                    and tracking your journey at a glance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800">
              <div className="bg-gray-950 rounded-lg p-4 sm:p-6 shadow-md border border-gray-800">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm sm:text-base text-gray-300 italic mb-4">
                  "Today was challenging but rewarding. The morning meeting went well..."
                </p>
                <div className="bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-700/30">
                  <p className="text-xs sm:text-sm text-green-400 font-semibold mb-2">AI Summary</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Productive day with successful meeting. Felt challenged but accomplished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tone & Emotional Analysis Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-950 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            Understand Your Emotional Landscape
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-4">
            AI-powered tone analysis reveals patterns in your emotions and mindset.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-800 hover:border-green-700/50 transition-all">
              <div className="bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-green-700/50">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Tone Detection</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Identify whether your entries are positive, neutral, or need attention.
                Track emotional trends over time.
              </p>
            </div>

            <div className="bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-800 hover:border-green-700/50 transition-all">
              <div className="bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-green-700/50">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Sentiment Analysis</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Deep insights into your emotional state, helping you understand what
                drives your moods and reactions.
              </p>
            </div>

            <div className="bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-800 hover:border-green-700/50 transition-all sm:col-span-2 md:col-span-1">
              <div className="bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-green-700/50">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Pattern Recognition</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Discover recurring themes, triggers, and emotional patterns that
                shape your daily experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memory & Performance Tracking Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 sm:p-8 rounded-2xl shadow-2xl text-white border border-gray-800">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Your Performance Dashboard</h3>

                <div className="space-y-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-gray-300">Journaling Streak</span>
                      <span className="text-lg sm:text-xl font-bold text-green-400">28 days</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '93%' }}></div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-gray-300">Overall Mood Trend</span>
                      <span className="text-lg sm:text-xl font-bold flex items-center text-green-400">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        Improving
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-300">Total Entries</span>
                      <span className="text-lg sm:text-xl font-bold text-green-400">142</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Track Your Growth Over Time
              </h2>
              <p className="text-base sm:text-lg text-gray-400">
                Voixera remembers everything so you don't have to. Watch your personal
                development unfold with detailed performance analytics.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white">Memory Timeline</h4>
                    <p className="text-sm sm:text-base text-gray-400">AI extracts and organizes key memories from your entries automatically.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white">Performance Metrics</h4>
                    <p className="text-sm sm:text-base text-gray-400">Visualize your consistency, emotional trends, and personal growth milestones.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white">Insights & Reflections</h4>
                    <p className="text-sm sm:text-base text-gray-400">Receive AI-generated insights based on your journaling patterns and history.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            Start Your Journey Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
            Join thousands who are transforming their thoughts into meaningful insights with Voixera.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link
              to="/start"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/50 inline-block"
            >
              Start Demo
            </Link>
            <Link
              to="/start"
              className="w-full sm:w-auto border-2 border-green-500 text-green-400 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-500/10 transition-all inline-block"
            >
              Try It Now
            </Link>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center text-xs sm:text-sm px-4">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}

