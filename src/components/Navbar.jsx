import React, { useState } from 'react'
import vector from '../assets/vector.png'
import close from '../assets/close.png'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive]=useState('home')

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-[#1A1A1A] py-4 px-8 sm:px-16 md:px-8">

      {/* Logo */}
      <p className="font-[Playfair_Display] text-3xl font-bold tracking-tight md:text-4xl text-[#C1C1C1]">
        <span className="text-[#4FC3F7]">G</span>
        <span className="text-[#C1C1C1]">BA</span>
      </p>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-6">
        <a href="#home" onClick={()=>setActive('home')} className={`${active==='home'?'text-[#4FC3F7]':'text-[#C1C1C1]'} text-lg font-semibold`}>Home</a>
        <a href="#about" onClick={()=>setActive('about')} className={`${active==='about'?'text-[#4FC3F7]':'text-[#C1C1C1]'} text-lg font-semibold`}>About</a>
        <a href="#projects" onClick={()=>setActive('projects')} className={`${active==='projects'?'text-[#4FC3F7]':'text-[#C1C1C1]'} text-lg font-semibold`}>Projects</a>
        <a href="#services" onClick={()=>setActive('services')} className={`${active==='services'?'text-[#4FC3F7]':'text-[#C1C1C1]'} text-lg font-semibold`}>Services</a>
        <a href="#contact" onClick={()=>setActive('contact')} className={`${active==='contact'?'text-[#4FC3F7]':'text-[#C1C1C1]'} text-lg font-semibold`}>Contact</a>
      </nav>

      
      <div className="flex items-center gap-3">

        <a href="#contact" className="px-3 py-3 rounded-2xl border-2 border-[#4FC3F7] text-[#4FC3F7] text-md font-medium">Hire Me</a>

        <button onClick={() => setOpen(!open)} className="sm:hidden">
          <img src={vector} alt="Menu" className="w-6 h-6" />
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="absolute top-0 left-0 w-full h-screen bg-[#1A1A1A] flex flex-col gap-4 p-6 sm:hidden z-50">
          <a href="" onClick={()=>setOpen(false)} className='inline-flex items-cneter justify-end'><img src={close} alt="" className='w-8 h-8 rounded-full border bg-white'/></a>
          <a href="#home" onClick={() => setOpen(false)} className="text-[#C1C1C1] hover:text-[#4FC3F7] text-lg font-semibold">
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="text-[#C1C1C1]  hover:text-[#4FC3F7] text-lg font-semibold">
            About
          </a>
          <a href="#services" onClick={() => setOpen(false)} className="text-[#C1C1C1]  hover:text-[#4FC3F7] text-lg font-semibold">
            Services
          </a>
          <a href="#projects" onClick={() => setOpen(false)} className="text-[#C1C1C1]  hover:text-[#4FC3F7] text-lg font-semibold">
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-[#C1C1C1]  hover:text-[#4FC3F7] text-lg font-semibold">
            Contact
          </a>
        </nav>
      )}

    </div>
  )
}

export default Navbar