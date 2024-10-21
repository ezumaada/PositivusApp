import React from 'react';

const Login = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block mb-2 text-sm">Email Address</label>
        <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm">Password</label>
        <input type="password" className="w-full p-2 border rounded-md" placeholder="Enter your password" />
      </div>
      <button type="submit" className="bg-black text-white w-full py-2 rounded-md hover:bg-gray-800">
        Login
      </button>
      <p className="text-sm text-center mt-4">Forgot your password? <a href="#" className="text-blue-500">Reset it here</a></p>
    </form>
  );
};

export default Login;
