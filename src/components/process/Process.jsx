import React, { useState } from 'react';

const Process = () => {
  // State to track which div is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the div by its index
  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the div if clicked again
    } else {
      setOpenIndex(index); // Open the clicked div
    }
  };

  // Data for the steps and descriptions
  const steps = [
    { title: "Consultation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Research and Strategy Development", description: "Pellentesque habitant morbi tristique senectus et netus." },
    { title: "Implementation", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
    { title: "Monitoring and Optimization", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
    { title: "Reporting and Communication", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
    { title: "Continual Improvement", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." }
  ];

  return (
    <div className="p-4">
      {/* Container for heading and paragraph */}
      <div className="flex flex-col md:flex-row justify-center gap-4 items-center text-center md:text-left mb-6">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">Our Working Process</h1>
        <p className="text-gray-600">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      {/* Steps container */}
      <div className="w-full  mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="mb-4 px-2 rounded-lg border-2 border-solid border-black  bg-white shadow-lg">
            {/* Step title with toggle */}
            <div
              onClick={() => handleToggle(index)}
              className={`cursor-pointer   p-4  ${openIndex === index ? 'border-b-2 border-black' : ''} hover:bg-[#B9FF66] shadow-[0px_4px_10px_rgba(0,0,0,0.2) transition duration-300`}
            >
              <h3 className="text-lg font-semibold">
                {index + 1}. {step.title}
              </h3>
            </div>

            {/* Description that toggles open/close */}
            {openIndex === index && (
              <div className="p-4 bg-gray-100 rounded-b-lg">
                <p>{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
