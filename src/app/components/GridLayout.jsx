"use client";

import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import DarkModeToggle from "./DarkModeToggle";
import TechStackMarquee from "@/components/TechStackMarquee";
import TechNamesMarquee from "./TechNamesMarquee";

export default function GridLayout() {
  return (
    <div className="bg-background pt-12 pb-10 max-w-[85%] mx-auto">
      {/* Bento Grid with 5 columns */}
      <BentoGrid className="gap-4 grid-cols-5">
        {/* Top Row */}
        <BentoCard
          className="col-span-2 row-span-1"
          background={
            <div className="h-full bg-[#594f3f] rounded-md flex flex-col justify-center pl-6 pr-6 pb-6 pt-4">
              <h2 className="font-sans text-5xl font-bold text-[#EED9C4] pt-4 pb-2">Hi, I'm Aryansh -</h2>
              <p className="pt-10 font-sans mt-2 text-3xl text-[#EED9C4]">
                Full Stack Developer, driven by curiosity and code.
              </p>
            </div>
          }
        />
        
        <BentoCard
          className="col-span-1 row-span-1"
          background={
            <div className="h-full bg-[#fffef2] rounded-md flex items-center justify-center">
              <img
                src="/icons/mypfp.jpg" // Use the converted .jpg or .png file
                alt="Profile Picture"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          }
        />
        <BentoCard
          className="col-span-1 row-span-1 h-full w-full p-0 m-0 bg-[#594f3f] overflow-hidden"
          background={
            <div className="h-full w-full bg-[#594f3f] flex flex-col items-center justify-center text-center">
              <a
                href="/Aryansh-Rao-Resume.pdf"
                download="Aryansh-Rao-Resume.pdf"
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <img
                  src="/icons/resume-thumbnail.png"
                  alt="Resume Thumbnail"
                  className="w-42 h-64 object-cover shadow-none border-none rounded-md"
                />
              </a>
            </div>
          }
        />
        <BentoCard
          className="col-span-1 row-span-1"
          background={
            <div className="h-full grid grid-rows-2 grid-cols-3 gap-2 rounded-md bg-black">
              {/* Top Row: Icons */}
              <div className="flex items-center justify-center rounded-md hover:bg-opacity-90 transition duration-300">
                <a href="https://www.linkedin.com/in/aryansh02/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/icons/linkedin.png"
                    alt="LinkedIn"
                    className="w-16 h-16 object-contain"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-md hover:bg-opacity-90 transition duration-300">
                <a href="https://github.com/aryansh02" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/icons/Github-Dark.svg"
                    alt="GitHub"
                    className="w-16 h-16 object-contain"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-md hover:bg-opacity-90 transition duration-300">
                <a href="https://open.spotify.com/user/316qptdraiplmvy4p2dv6ifhchoa?si=0ac4f00278ce453d" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/icons/spotify.png"
                    alt="Spotify"
                    className="w-16 h-16 object-contain"
                  />
                </a>
              </div>

              {/* Bottom Row: Projects Text */}
              <div className="col-span-3 flex items-center justify-between rounded-md px-4 py-2 bg-black hover:bg-opacity-90 transition duration-300">
                <a
                  href="https://vercel.com/aryansh02s-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-4xl font-sans font-bold text-[#fffef2] hover:underline hover:decoration-2 hover:decoration-[#8C7B6C] transition duration-300 mx-auto"
                >
                  Projects
                  <span className="ml-2 text-3xl hover:no-underline">↗</span>
                </a>
              </div>
            </div>
          }
        />

        {/* Second Row */}
        <BentoCard
          className="col-span-1 row-span-1"
          background={
            <div className="h-full bg-[#fffef2] rounded-md flex items-center justify-center">
              <img
                src="/icons/setup1.jpg" // Use the converted .jpg or .png file
                alt="Setup"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          }
        />

        <BentoCard
          className="col-span-2 row-span-1"
          background={
            <div className="h-full bg-[#fffef2] rounded-md flex flex-col justify-center pt-4 pl-6 pr-6 pb-6">
              <h3 className="font-sans font-bold text-5xl text-black">About</h3>
              <p className="font-sans pt-4 text-black text-xl">
                Motivated by innovation, a thirst for knowledge, and a commitment to excellence in technology.
              </p>
              <p className="font-sans pt-2 text-black text-xl">
                With expertise in full-stack development, I build scalable, high-performance applications that combine clean, maintainable code with seamless user experiences.
              </p>
            </div>
          }
        />
        <BentoCard
          className="col-span-1 row-span-1"
          background={
            <div className="h-full bg-black rounded-md flex flex-col items-center justify-start">
              <h3 className="font-honk font-normal text-5xl text-[#fffef2] pt-6 pb-8">Dev Stack</h3>
              <TechStackMarquee />
              <TechNamesMarquee />
            </div>
          }
        />
        <BentoCard
          className="col-span-1 row-span-2"
          background={
            <div className="h-full bg-[#fffef2] rounded-md flex flex-col justify-start ml-2 mr-2">
              <p className="font-sans text-black text-md ml-4 mr-3 mt-8">
                My journey into technology began with a curiosity to understand how things work, which evolved into a passion for building efficient, innovative applications and mastering full-stack development alongside Web3.
              </p>
              <p className="font-sans mt-6 text-black text-md ml-4 mr-3">
                I thrive on the challenge of bringing ideas to life while balancing my love for football, music, exploration, gaming, and reading - passions that fuel both personal and professional growth.
              </p>
              <p className="font-sans mt-6 text-black italic text-md ml-4 mr-3">
                "We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle
              </p>
            </div>
          }
        />

        {/* Third Row */}
        <BentoCard
          className="col-span-2 row-span-1"
          background={
            <div className="h-full bg-[#594f3f] rounded-md flex flex-col justify-center p-6 text-[#EED9C4] relative">
              {/* Top Left Text */}
              <div className="flex items-center justify-between">
                <p className="font-sans text-sm font-medium">Have a project in mind? Let&apos;s connect!</p>

                {/* Top Right Arrow */}
                <div className="text-[#EED9C4] text-2xl">
                  <span>&#8599;</span> {/* North-East arrow */}
                </div>
              </div>

              {/* Copy Email Placeholder */}
              <button
                onClick={() => navigator.clipboard.writeText("aryanshrao8744@gmail.com")}
                className="w-fit font-sans text-sm bg-[#8C7B6C] bg-opacity-50 text-[#EED9C4] rounded-md px-4 py-2 mt-1 mb-32 hover:bg-opacity-75 active:bg-[#5C4C3C] transition-all duration-300 ease-in-out"
              >
                Copy Email
              </button>

              {/* Contact Me Link */}
              <a
                href="https://www.linkedin.com/in/aryansh02/"
                className="text-6xl font-playfair font-medium hover:underline hover:decoration-[#EED9C4] transition-all duration-300 ease-in-out"
              >
                <span className="font-playfair font-medium">Contact</span>
                <span className="font-playfair italic font-normal"> me</span>
              </a>
            </div>
          }
        />
        <BentoCard
          className="col-span-1 row-span-1"
          background={
            <div className="h-full bg-black rounded-md flex items-center justify-center">
              <p className="text-3xl pl-4 pb-32 font-sans font-bold animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#594f3f] via-[#8C7B6C] to-[#000000]">
                Dark Mode 
              </p> 
              <p className="text-3xl mt-40  pr-4 font-sans font-bold animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#594f3f] via-[#8C7B6C] to-[#000000]">
                Coming Soon
              </p> 
              
            </div>
          }
        />
        
        <BentoCard
          className="col-span-1 row-span-1"
          background={
            <div className="h-full bg-[#fffef2] rounded-md flex items-center justify-center">
              <img
                src="/icons/setup2.jpg" // Use the converted .jpg or .png file
                alt="Setup"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}
