import React from 'react'

const InfoSection = () => {
  return (
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
  )
}

export default InfoSection