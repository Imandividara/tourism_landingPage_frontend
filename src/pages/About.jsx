
import React from 'react';

const About = () => {
  return (
    <div className="p-8 h-[870px] ">
      <h1 className="text-5xl mb-4 mt-10 text-center font-bold">About Us</h1>
      <p className="mb-5 text-center">We are a company committed to providing the best services.</p>
      <div>
      <p className='text-2xl text-center font-bold mt-5'>Our Team Members</p>
        <div className="flex mt-12">
          <div className="mr-16 ml-16">
            <img src="240_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg" alt="Team Member 1" className="w-52 h-32"/>
            <p className='text-2xl font-bold'>Lilly Colins</p>
            <p className='text-left mt-5' >Keeps the money coming in,muffin tray stocked. 15+ years of experience in the industry<br/></p>
          </div>
          <div className='ml-14 mr-16 '>
            <img src="240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="Team Member 2" className="w-52 h-32 ml-1"/>
            <p className='text-2xl font-bold'>Ashley Park</p>
            <p className='mt-5'>Holds degree in Computer Programming. Responsible for research and development.</p>
          </div>
          <div className='ml-16'>
            <img src="240_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="Team Member 3" className="w-52 h-32 ml-1"/>
            <p className='text-2xl font-bold'>Paul Forman</p>
            <p className='mt-5'>20+ years of experience. Hold Transport and Logistic degree Programming.</p>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="mr-20 ml-16 text-center">
            <img src="images (1).png" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto"/>
            <p className='text-2xl font-bold'>Who We Are</p>
            <p className='text-left mt-5' >Travel Treasures is an international travel <br />technology and travel software company and we serve travels <br/></p>
          </div>
          <div className='ml-20 mr-16 text-center'>
            <img src="images.png" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto"/>
            <p className='text-2xl font-bold'>What We Do</p>
            <p className='mt-5'>We partner with our clients to <br /> provide strong distribution capabilities  B2B/B2C/B2B2C travel technology, autoomate travel buisness process.</p>
          </div>
          <div className='ml-16 text-center'>
            <img src="download.png" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto"/>
            <p className='text-2xl font-bold'>Why Us</p>
            <p className='mt-5'>Travel Treasures develop and <br />enable access to extensive range of travel suppliers which includes all GDS,LCCs,600,000+ Hotels.</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;
