
import React from 'react'
import gamil from '../assets/gmail.png'

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10">
      
      {/* Main Footer */}
      <div className="px-6 md:px-16 flex flex-col items-center justify-center md:flex-row md:tems-start md:items-center md:justify-between gap-8">
        
        {/* Heading */}
        <div>
          <p className="text-4xl md:text-5xl font-light text-gray-400">
            Let's
          </p>

          <p className="text-4xl md:text-5xl font-light text-gray-400">
            Work Together<span className="text-white"> -</span>
          </p>
        </div>

        {/* Email */}
        <a href="mailto:bharathakhil1111@gmail.com" className="text-base md:text-lg text-gray-400 flex gap-2 items-center justify-center border border-gray-400 rounded-xl px-4 py-2">
          <span><img src={gamil} alt="" className='w- h-10'/></span>
          <p className='text-lg'>bharathakhil1111@gmail.com</p>
        </a>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-700" />

      {/* Copyright */}
      <div className="px-6 md:px-16 pt-6 flex justify-center">
        <p className="text-sm md:text-base text-gray-500 text-center">
          © Bharat Akhil Chaitanya. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
