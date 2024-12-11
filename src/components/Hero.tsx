import { FaLocationArrow } from 'react-icons/fa6'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import SubmitButton from './ui/SubmitButton'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      

      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50w]" fill="purple"/>
        <Spotlight className="-top-28 -left-80 h-[80vh] w-[50w]" fill="blue"/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] 
      bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center
         dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
        
      </div>
      
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <div className = "max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
      <a href='/auth/login'>
          <SubmitButton
              title="Login" 
              icon={<FaLocationArrow />} 
              position={'right'}          />
      </a>
      </div>
      <div className = "max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
      <a href='/auth/signup'>
          <SubmitButton
              title="Sign Up" 
              icon={<FaLocationArrow />} 
              position={'right'}          />
      </a>
      </div>
      </div>

      {/* <LoginButton>
      <button className="border text-sm font-medium relative text-center border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
        <span>Login</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
      </LoginButton> */}

      <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-xs text-center  text-blue-100 max-w-80">
          Dynamic Web Magic with next.js
        </h2>

        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Making your body GREAT AGAIN"
          />
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-sm lg:text-sm">
          One url to rule them all
        </p>

        <a href='about'>
          <SubmitButton
              title="Show my Work" 
              icon={<FaLocationArrow />} 
              position={'right'}          />
        </a>

      </div>
      
    </div>
 
    


    </div>
    
   

  )
}

export default Hero
