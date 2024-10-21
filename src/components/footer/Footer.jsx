import React from 'react';
import logo from '../../assets/images/Logofooter.png';
import link from '../../assets/images/Iconlink.png';
import fb from '../../assets/images/Iconfb.png';
import twit from '../../assets/images/Icontwit.png';

const Footer = () => {
  return (
    <div className='bg-black py-6 text-white'>
        <div>
            <img className='mx-auto mb-3' src={logo} alt="logo" />

        </div>
        <ul className='flex flex-col items-center text-center'>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing </li>
        </ul>
        <div className='text-center py-6'> 
            <h2 className='text-white text-xl pb-3'>Contact Us</h2>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 123 Main St, Moonstone City, Stardust State Zip</p>
        </div>
        <div className='bg-slate-700 mx-3 px-3 my-5 pb-4 flex flex-col'>
         <input type="email" placeholder=" Email" className="w-full bg-transparent p-2 my-4 border rounded-md" />
         <button type='submit' className='bg-[#B9FF66] rounded  px-4 py-3 text-black font-semibold justify-center flex'>Subscribe to News</button>
        </div>
        <div className='flex flex-row gap-3 my-5 justify-center'>
            <img src={link} alt="" />
            <img src={fb} alt="" />
            <img src={twit} alt="" />
        </div>
        <div className='flex flex-col pb-4 items-center'>
            <p>�� 2021 Positivus. All rights reserved.</p>
            <p>Privacy Policy</p>
        </div>
  
    </div>
  )
}

export default Footer