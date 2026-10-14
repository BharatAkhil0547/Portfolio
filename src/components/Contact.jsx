import React,{useState} from 'react'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

const Contact = () => {
  const [status ,setStatus]=useState('')
  const [loading,setLoading]=useState(false)
  const handleSubmit=async (e)=>{
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try{
      await emailjs.sendForm(
        'service_11ivu9r',
        'template_bz6n6l8',
        e.target,
        {
          publicKey:'qbGhRDAm_AgK2phWv'
        }
      )
      toast.success("Message sent Successfully")
      setStatus('Message sent')
      e.target.reset()
    }
    catch(error){
      // console.error('Something went wrong')
      toast.error('Something went wrong. Please try again.')
      setStatus("Something went wrong. please try again.")
    }
    finally{
      setLoading(false)
    }
  
  }

  return (
    <div className='bg-[#1A1A1A] py-8'>
      <Toaster position="top-right" richColors />
      {/* contact header */}
      <div className="flex flex-col items-center justify-center text-center mt-16 mb-12 px-4">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-[#4FC3F7]">
          Let's Connect
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Get In Touch
        </h2>

        <div className="mt-4 h-1 w-16 rounded-full bg-[#4FC3F7]"></div>

        
      </div>
      <div className='max-w-xl mx-auto py-2' >

        <form onSubmit={handleSubmit} action="" className='flex flex-col items-start justify-center gap-3 px-8'>
          <div className='w-full'>
            <label htmlFor="name" className='text-gray-300 font-semibold'>Name</label><br />
            <input type="text" id='name' name='name' placeholder='Full Name' className='border border-2 rounded-xl py-5 border-gray-400 text-white px-4 mt-2 w-full' required/>
          </div>
          <div className='w-full'>
            <label htmlFor="Email" className='text-gray-300 font-semibold'> Email</label><br />
            <input type="email" id='Email' name='email' placeholder='example@gmail.com' className='border border-2 rounded-xl py-5 border-gray-400 text-white px-4 mt-2 w-full' required/>
          </div>
          <div className='w-full'>
            <label htmlFor="mobile" className='text-gray-300 font-semibold'>Phone Number</label><br />
            <input type="tel" id='mobile' name='phone' placeholder='Phone Number' className='border border-2 rounded-xl py-5 border-gray-400 text-white px-4 mt-2 w-full' required/>
          </div>
          <div className='w-full'>
            <label htmlFor="subject" className='text-gray-300 font-semibold'>Services</label><br />
            <input type="text" id='subject' name='subject' placeholder='Subject' className='border border-2 rounded-xl py-5 border-gray-400 text-white px-4 mt-2 w-full ' />
          </div>
          <div className='w-full'>
            <label htmlFor="message" className='text-gray-300 font-semibold'>Message</label><br />
            <textarea name="message" id="message" rows={6} placeholder='Message Details' className='border border-2 rounded-xl py-5 border-gray-400 text-white px-4 mt-2 w-full ' required></textarea>
          </div>
          <button className='flex items-center justify-center bg-white rounded-xl max-w-full w-full py-2 font-semibold'>{loading?'Sending...':'Get in Touch'}</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
