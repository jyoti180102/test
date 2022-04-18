import React from 'react'
import hero from '../assets/images/slider1.webp';

function Hero() {
  return (
    <div>

        <div className="w-screen pt-16 bg-gradient-to-tr from-orange-600 to-orange-700">
            <img src={hero} className="md:h-heroImage w-screen mix-blend-overlay object-stretch " alt="hero" title="Polyprep"/>
        </div>

      <div>
       
        
        

        <div className="px-5 bg-pink-400 sm:flex block w-screen">
          <div className="bg-white md:w-[50%]">
            <div className="border-black border-2 py-2 text-justify">
              <h1 className="text-xl font-bold mb-2">Diploma Courses</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio voluptatum praesentium velit soluta reiciendis, rem odit pariatur vel eius nemo ipsa laboriosam voluptatibus, distinctio asperiores laborum quaerat iure quis!</p>
            </div>
          </div>

          <div className="bg-white md:w-[50%]">
            <div className="border-black border-2 text-justify">
              <h1 className="text-xl font-bold mb-2">Diploma Courses</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio voluptatum praesentium velit soluta reiciendis, rem odit pariatur vel eius nemo ipsa laboriosam voluptatibus, distinctio asperiores laborum quaerat iure quis!</p>
            </div>
          </div>

        </div>

        

      </div>       
    </div>
  )
}

export default Hero