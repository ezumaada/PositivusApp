import React, { useState } from 'react';
import { MessageSquare, FileQuestion } from 'lucide-react';
import { Card, CardContent } from "../../components/ui/Card";



const ContactUs = () => {
  const [activeForm, setActiveForm] = useState('hi'); // State to toggle between forms

  // Function to switch forms
  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  return (
    <section id="quote-request" className=" overflow-hidden my-[7vh]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side with form */}
        <Card className="w-full md:w-1/2 bg-gray-50">
          <CardContent className="p-6">
            <h1 className="text-center text-2xl font-semibold mb-2">Contact Us</h1>
            <p className="text-center text-gray-600 mb-6">
              Connect with Us: Let's Discuss Your Digital Marketing Needs
            </p>
            
            {/* Form Selection */}
            <div className="flex justify-center gap-10 mb-6">
              <div
                className={`flex flex-col items-center cursor-pointer transition-all ${
                  activeForm === 'hi' ? 'border-b-2 border-black pb-2' : ''
                }`}
                onClick={() => handleFormSwitch('hi')}
              >
                <MessageSquare className="w-6 h-6" />
                <p className="text-center mt-2">Say Hi</p>
              </div>
              <div
                className={`flex flex-col items-center cursor-pointer transition-all ${
                  activeForm === 'quote' ? 'border-b-2 border-black pb-2' : ''
                }`}
                onClick={() => handleFormSwitch('quote')}
              >
                <FileQuestion className="w-6 h-6" />
                <p className="text-center mt-2">Request a Quote</p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder={activeForm === 'hi' ? "What's on your mind?" : 'Request a Quote'}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  rows={4}
                  placeholder={activeForm === 'hi' ? 'Say Hello!' : 'Tell us about your project!'}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="bg-black text-white px-4 py-3 w-full rounded-lg hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Right side illustration */}
        <div className="hidden md:block w-1/2">
          <img 
            src="/contact-Illustration.png"
            alt="Contact Illustration" 
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
