import React, { useState } from 'react';
import illustration from '../../assets/images/contact-illustration.png';
import radio from '../../assets/images/radio-button.png';

const ContactUs = () => {
  const [activeForm, setActiveForm] = useState('hi'); // State to toggle between forms

  // Function to switch forms
  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  return (
    <section id="quote-request" className="relative overflow-hidden my-[7vh]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side with form selection */}
        <div className="w-full md:w-1/2 bg-[#F3F3F3] p-6">
          <h1 className="text-center text-2xl mb-2">Contact Us</h1>
          <p className="text-center mb-6">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
          
          {/* Form Selection */}
          <div className="flex justify-center gap-10 mb-6">
            <div
              className={`cursor-pointer ${activeForm === 'hi' ? 'border-b-4 border-black' : ''}`}
              onClick={() => handleFormSwitch('hi')}
            >
              <img src={radio} alt="Say Hi" className="w-6 h-6 rounded-full" />
              <p className="text-center mt-2">Say Hi</p>
            </div>
            <div
              className={`cursor-pointer ${activeForm === 'quote' ? 'border-b-4 border-black' : ''}`}
              onClick={() => handleFormSwitch('quote')}
            >
              <img src={radio} alt="Request a Quote" className="w-6 h-6 rounded-full" />
              <p className="text-center mt-2">Request a Quote</p>
            </div>
          </div>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="block mb-2">Your Name</label>
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Your Email</label>
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Subject</label>
              <input
                type="text"
                placeholder={activeForm === 'hi' ? "What's on your mind?" : 'Request a Quote'}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Your Message</label>
              <textarea
                placeholder={activeForm === 'hi' ? 'Say Hello!' : 'Tell us about your project!'}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button type="submit" className="bg-black text-white px-4 py-3 w-full rounded-lg">
              Submit
            </button>
          </form>
        </div>

        {/* Right side illustration */}
        <div className="hidden md:block absolute right-0 top-0 h-full">
          <img src={illustration} alt="Contact Illustration" className="object-cover h-full" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
