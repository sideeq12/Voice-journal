import React from 'react'
import { Link } from 'react-router'

const HeroSection = () => {
  return (
     <section className="relative bg-gradient-to-br from-gray-900
      via-black to-gray-900 text-white py-12
       sm:py-16 md:py-20 px-4 sm:px-6 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 text-left">
          <div className="flex flex-col items-end text-left space-y-6 sm:space-y-8">
            <div className="flex text-left flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <h1 className="text-4xl sm:text-5xl text-left
               md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300
                bg-clip-text text-transparent">Voixera</h1>
            </div>
            <p className="text-xl sm:text-2xl font-light max-w-3xl px-4 text-gray-200">
              Your AI-Powered Journaling Companion
            </p>
            <p className="text-base text-right sm:text-lg md:text-xl text-gray-400 max-w-2xl px-4">
              Transform your thoughts into insights. Speak naturally, and let AI convert your audio into text,
              summaries, SEO-ready article and emotional intelligence that evolves with you.
            </p>
            <Link
              to="/start"
              className="bg-green-600 text-white px-6 sm:px-8 py-1
               sm:py-2 rounded-2xl cursor-pointer text-base sm:text-lg font-semibold
                hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/50 inline-block"
            >
              Start Demo
            </Link>
          </div>
          <img src="/mainhero.png"  className='col-span-1 lg:-ml-32' alt="voixer her image" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>
  )
}

export default HeroSection