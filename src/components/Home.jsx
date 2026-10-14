import React from 'react'
import Ellipse from '../assets/Ellipse.png'
import profile from '../assets/profile.png'
import Resume from '../assets/Resume.pdf'
import bgrelay from '../assets/bgrelay.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Email from '../assets/Email.png'

const Home = () => {
  return (
    <div className='relative bg-[#1A1A1A] overflow-hidden text-[#C1C1C1] min-h-screen'>
      {/*  navbar*/}
      <div>
        <img src={bgrelay} alt="" className='absolute inset-0 w-full h-full z-0 opacity-15 '/>
      </div>
      <div className='relative z-10 min-h-screen flex items-center justify-center px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10 w-full max-w-7xl items-center justify-center mt-16 lg:mt-6'>
          {/* our info  */}
          <div className='flex flex-col gap-4 items-center lg:items-start justify-center'>
            <p className='text-2xl md:text-4xl  font-light text-gray-300'>Hi,I am</p>
            {/* <p className='text-2xl sm:text-3xl md:text-6xl font-semibold tracking-tight text-[#4cc9f0]'>Bharat Akhil Chaitanya</p> */}
            <p className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#4cc9f0] text-center md:text-left'>Bharat Akhil Chaitanya</p>
            
            <p className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#B8C4CE]'>
              Full Stack Developer
            </p>
            <p className='text-base sm:tex-md md:text-xl text-center lg:text-left leading-relaxed md:leading-9 text-[#A7B0B8]'>Full Stack Developer passionate about building modern, responsive and scalable web applications</p>
            {/* mail/github/ linkedin/ leetcode*/}
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a href="https://github.com/BharatAkhil0547"><img src={github} alt="" className='w-10 h-10 rounded-full border bg-white' /></a>
              <a href="https://www.linkedin.com/in/bharat-akhil-chaitanya-gandepalli-8955481a5/?isSelfProfile=true"><img src={linkedin} alt="" className='w-10 h-10 rounded-full border' /></a>
              <a href="mailto:bharathakhil1111@gmail.com"><img src={Email} alt="" className='w-10 h-10 rounded-full border bg-white'/></a>
              {/* <a href="#">Leetcode</a>
              <a href="#">HackerRank</a> */}

            </div>
            <div className='mt-2 flex gap-4'>
              <a href='#contact' className='text-white font-medium px-2 py-1 md:px-4 md:py-2 rounded-xl cursor-pointer text-md md:text-xl bg-[#4FC3F7]'>Contact Me</a>
              <a href={Resume} download="Bharat_Akhil_Chaitanya.pdf" className='px-2 py-1 md:px-4 md:py-2 rounded-xl  text-md md:text-lg text-[#4FC3F7] cursor-pointer border-2 border-[#4FC3F7]'>Download CV</a>
            </div>
            

          </div>
          {/* my image */}
          <div className="relative flex items-center justify-center">
  {/* Optional subtle glow behind the character matching your theme */}
      <div className="absolute z-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Borderless image with bottom-fade mask */}
      <img
        src={profile}
        alt="Bharat Akhil Chaitanya"
        className="z-10 w-[300px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto object-contain [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] select-none"/>
    </div>
         {/* <div className='relative flex items-center justify-center'>
          <img src={profile} alt="" className='z-10 w-[220px] h-[320px] sm:w-[280px] sm:h-[400px] md:w-[320px] md:h-[460px] lg:w-[380px] lg:h-[500px] rounded-full bg-[#30343B]'/>

         </div> */}
        </div>

      </div>
    </div>
  )
}

export default Home

