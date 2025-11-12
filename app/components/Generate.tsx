import React from 'react'

const Generate = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 px-6 lg:px-16'>
       <div className='space-y-6'>
         <div className='inline-block px-4 py-2 bg-purple-100 rounded-full'>
            <span className='text-purple-700 font-semibold text-sm'>AI-Powered Generation</span>
         </div>

         <h2 className='text-4xl lg:text-5xl font-bold  leading-tight'>
            Transform Speech into Search Engine Optimisation Ready Articles
         </h2>

         <p className='text-lg text-gray-400 leading-relaxed'>
            Effortlessly transform your spoken words into polished text with Voixera's 
            advanced AI transcription technology.

         </p>

       </div>

       <div className='relative'>
         <img
           src="/voixerasecond.png"
           alt="Voixera AI transcription visualization"
           className='w-full h-auto rounded-2xl shadow-2xl'
         />
       </div>
    </div>
  )
}

export default Generate