import React from 'react'

const Tone = () => {
  return (
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-950 ">
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
  )
}

export default Tone