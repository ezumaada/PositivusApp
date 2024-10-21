import React from 'react';
import illustration from '../../assets/images/illustration.png'

const Header = () => {
  return (
    <div className='flex flex-col my-10 md:flex-row gap-4'>
        <div className=' w-full md:w-1/2 p-5'>
            <h1 className='font-bold mb-6 text-5xl'>Navigating <br /> the digital landscape for success</h1>
            <p className='py-5font-semibold'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <div>
                <button className='bg-black items-center transform hover:scale-110 transition duration-300 text-white my-5 rounded-md px-3 py-2'>Book a consultation</button>
            </div>
        </div>
        <div>
            <img className='w-auto ' src={illustration} alt="illustration" />
        </div>
    </div>
  )
}

export default Header