import React from 'react'

const HeroSection = ({title}) => {
    
  return (
    <>
    <div className="min-h-[50vh]  flex items-center justify-center bg-[url(/hero.jpg)] object-cover bg-no-repeat  relative">
    <div className='absolute inset-0 bg-black/10'/>
        <h1 className='text-white font-bold text-8xl uppercase'>
            {title}
        </h1>
    </div>
    
    </>
  )
}

export default HeroSection