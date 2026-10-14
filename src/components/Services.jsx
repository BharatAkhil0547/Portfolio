import React from 'react'
import {Code2,Server,Database,Plug,CloudUpload,ShieldCheck,} from "lucide-react";
const Services = () => {
  const services=[
    {
    icon:Code2,
    title:'Full Stack Web Development',
    desc:'Building complete web applications with modern frontend and backend technologies.',
    },
    {
      icon:Server,
      title:'Backend Development',
      desc:'Developing secure server-side logic, business functionality, and scalable application architecture.'
    },
    {
      icon:Database,
      title:'Database Design & Management',
      desc:'Designing efficient database structures and managing reliable data storage and retrieval.'
    },
    {
      icon:Plug,
      title:'API Development & Integration',
      desc:'Creating RESTful APIs and connecting third-party services for seamless data exchange.'
    },
    {
      icon:CloudUpload,
      title:'Deployment & Hosting',
      desc:'Deploying applications, configuring hosting environments, and setting up production-ready workflows.'
    },
    {
      icon:ShieldCheck,
      title:'Authentication & Security',
      desc:'Implementing secure login, user roles, access control, and data protection features.'
    }

]
  return (
    <div className='bg-[#1A1A1A] py-6 min-h-screen cursor-pointer'>
      {/* services heading */}
      <div className="flex flex-col items-center justify-center text-center mt-20 mb-12 px-4">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-[#4FC3F7]">
          What I Do
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          My Services
        </h2>

        <div className="mt-4 h-1 w-16 rounded-full bg-[#4FC3F7]"></div>

        
      </div>
      {/* services */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 px-8 gap-8 max-w-7xl mx-auto'>
        {services.map((service,ind)=>{
          const Icon=service.icon
        return (
          
          
          <div key={ind} className='w-full group relative flex flex-col items-start gap-5 rounded-2xl bg-[#242424] border border-white/10 p-7 md:px-7 min-h-[270px] transition-all duration-500 hover:-translate-y-2 hover:border-[#4FC3F7]/60 hover:shadow-[0_15px_40px_rgba(79,195,247,0.12)]'>
            <div className='w-14 h-14 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-[#4FC3F7]/30 transition-all duration-500 group-hover:bg-[#4FC3F7] group-hover:text-[#1A1A1A] group-hover:scale-105'>
              <Icon size={28} strokeWidth={1.8} className="w-10 h-10 text-[#4FC3F7] group-hover:text-[#1A1A1A]" />
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-2xl font-semibold text-[#4FC3F7] transition-colors duration-300 group-hover:text-[#4FC3F7]'>{service.title}</p>
              <p className='text-base leading-7 text-gray-400'>{service.desc}</p>
            </div>
          </div>
        )})

        }

      </div>
    </div>
  )
}

export default Services
