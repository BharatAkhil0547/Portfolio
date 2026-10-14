import React from "react";
import {ShoppingCart,ChefHat,FileSearch,ScanFace,Bot,ArrowUpRight} from "lucide-react";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

const Projects = () => {
  const projects = [
    {
      image: image1,
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description:
        "A full-stack shopping platform with authentication, product browsing, cart management, and order functionality.",
      link: "https://github.com/BharatAkhil0547/E-Commerce",
    },
    {
      image: image2,
      icon: ChefHat,
      title: "TastyBites",
      description:
        "A recipe discovery platform for exploring diverse cuisines, discovering new recipes, and finding cooking inspiration.",
      link: "https://tasty-bites-green-delta.vercel.app/",
    },
    {
      image: image3,
      icon: FileSearch,
      title: "Resume Parsing & Job Suggestion",
      description:
        "An intelligent system that analyzes resumes, extracts relevant information, and suggests suitable job opportunities.",
      link: "https://github.com/BharatAkhil0547/RESUME-PARSING-AND-JOB-SUGGESTION-SYSTEM",
    },
    {
      image: image4,
      icon: ScanFace,
      title: "Prevention of Impersonation",
      description:
        "A computer vision system designed to verify candidate identity and detect potential impersonation during examinations.",
      link: "https://github.com/BharatAkhil0547/PREVENTION-OF-IMPERSONATION-IN-EXAMINATION",
    },
    {
      image: image5,
      icon: Bot,
      title: "Automation Projects",
      description:
        "Python-based automation and web scraping solutions designed for efficient data collection and processing.",
      link: "https://github.com/BharatAkhil0547/WebScraping-Projects",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-20 px-6 md:px-12">
      {/* project header */}
      <div className="flex flex-col items-center text-center mt-20 mb-12 px-4">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-[#4FC3F7]">
          my work
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>

        <div className="mt-4 h-1 w-16 rounded-full bg-[#4FC3F7]"></div>
    </div>
      {/* projects */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          projects.map((project,ind)=>{
            return (
              <div key={ind} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#202020] transition-all duration-500 hover:-translte-y-2 hover:border-[#4FC3F7]/60 hover:shadow-[0_15px_50px_rgba(79,195,247,0.12)]">
                {/* image */}
                <div className="relative h-[230px] overflow-hidden">
                  <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                </div>
                {/* content */}
                <div className="px-5 pt-10 pb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[4FC3F7]">{project.title}</h3>
                  <p className="mt-3 text-gray-400 text-base leading-7 min-h-[84px]">{project.description}</p>
                  <div className="h-px bg-white/10 my-5" />
                  <a href={project.link} target="_blank" rel="noopencer noreferrer" className="inline-flex items-center justify-center gap-2 text-[#4FC3F7] font-medium transition-all duration-300 hover:gap-3"> View Project
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                  </a>
                </div>
              </div>
            )
          })
        }

      </div>

    </section>
  );
};

export default Projects;