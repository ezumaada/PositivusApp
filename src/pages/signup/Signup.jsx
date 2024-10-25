import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <Navbar/>
    <form className='mx-[5vw] my-6 py-3 px-2 border-black border-solid border-2'>
      <div className="mb-4">
        <label className="block mb-2 text-sm">Name</label>
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm">Email Address</label>
        <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm">Password</label>
        <input type="password" className="w-full p-2 border rounded-md" placeholder="Create a password" />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm">Confirm Password</label>
        <input type="password" className="w-full p-2 border rounded-md" placeholder="Confirm your password" />
      </div>
      <button type="submit" className="bg-black text-white w-full py-2 rounded-md hover:bg-gray-800">
        Sign Up
      </button>
      <p className="text-sm text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
    </form>
    <Footer/>
    </div>
  );
};

export default SignUp;
