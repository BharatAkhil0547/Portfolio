import React from 'react'
import Resume from '../assets/Resume.pdf'

const About = () => {
  return (
    <section className="bg-[#1A1A1A] min-h-screen py-4">
      {/* Header */}
      <div className="flex flex-col items-center text-center mt-20 mb-12 px-4">
  <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-[#4FC3F7]">
    Get to know me
  </p>

  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
    About Me
  </h2>

  <div className="mt-4 h-1 w-16 rounded-full bg-[#4FC3F7]"></div>
</div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto mt-7 sm:mt-10 lg:mt-12 text-center px-8">
        <p className="text-xl leading-relaxed text-gray-300 mt-4">
          Hi there! I'm Bharat Akhil Chaitanya, a MERN Stack
          Developer specializing in building modern, responsive, and scalable
          web applications. I work across frontend and backend development,
          combining intuitive user interfaces with robust and efficient
          server-side solutions.
        </p>

        <p className="text-xl leading-10 text-gray-300 mt-5">
          My technical expertise includes MongoDB, Express.js, React.js,
          Node.js, JavaScript, and RESTful APIs. I focus on writing clean,
          maintainable code and developing applications that are reliable,
          performant, and easy to scale.
        </p>

        <p className="text-xl leading-10 text-gray-300 mt-5">
          I enjoy turning ideas and real-world requirements into functional
          digital products, with a strong focus on problem-solving, application
          performance, and user experience. I'm passionate about developing
          impactful software solutions and contributing to projects that create
          real value.
        </p>

        {/* Resume Button */}
        <a href={Resume} download="Bharat_Akhil_Chaitanya.pdf" className="inline-flex items-center justify-center mt-12 px-6 py-3 rounded-full border border-[#4FC3F7] text-gray-200 text-md font-medium hover:bg-[#4FC3F7] hover:text-white transition duration-300">
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default About