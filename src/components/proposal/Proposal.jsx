import React from 'react'
import spidey from '../../assets/images/spidey.png'

const Proposal = () => {
  return (
    <div className='bg-slate-200 px-9 rounded-md flex flex-col md:flex-row justify-between items-center'>
        <div >
            <h1 className='font-semibold text-2xl mb-[7vh]'>Let's make things happen</h1>
            <p>Contact us today to learn more about our digital  marketing services can help boost your business grow and <br /> succeed online.</p>
            <button className='bg-black px-4 py-2 text-white my-5 hover:bg-white hover:text-black transition  duration-300 transform hover:scale-110 border-black border-solid border-2 text-center'>Get your free Proposal</button>
        </div>
        <div className='hidden md:block'>
            <img className='p-6 ' src={spidey} alt="spidey" />
        </div>
    </div>
  )
}

export default Proposal