import React from 'react'
import { Link } from 'react-router'

const CallToAction = () => {
  return (
  
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            Start Your Journey Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
            Join others who are transforming their thoughts into meaningful insights with Voixera.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          
            <Link
              to="/start"
              className="w-full sm:w-auto border-2 border-green-500 text-green-400 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-500/10 transition-all inline-block"
            >
              Try It Now
            </Link>
          </div>

      
        </div>
      </section>
  )
}

export default CallToAction