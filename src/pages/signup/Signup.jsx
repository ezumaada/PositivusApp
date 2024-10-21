import React from 'react';

const SignUp = () => {
  return (
    <form>
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
    </form>
  );
};

export default SignUp;
