import React, { useState } from 'react';
import arrow from '../../assets/images/arrow.png';

const Cases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  // Handle slider navigation for small screens
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length);
  };

  return (
    <div>
      <section id="use-cases" className="my-8">
        <div className='flex flex-col my-6 gap-4 items-center'>
          <h1 className='text-center text-2xl font-semibold'>Case Studies</h1>
          <p className='text-center text-lg'>
            Explore Real-Life Examples of Our Proven Digital Marketing Success Through Our Case Studies.
          </p>
        </div>

        {/* Large screen layout */}
        <div className='hidden md:flex bg-black rounded-lg px-5 py-4 flex-row justify-between'>
          {cases.map((caseStudy, index) => (
            <div key={index} className='border-r-2 last:border-r-0 p-4 border-slate-50'>
              <p className="text-white">{caseStudy.text}</p>
              <p className='text-white hover:underline flex items-center mt-4'>
                Learn more <img src={arrow} alt="arrow" className="ml-2" />
              </p>
            </div>
          ))}
        </div>

        <div className='relative md:hidden w-full'>
  <div className='overflow-hidden h-[325px] w-full mx-auto'>
    {/* Flex container with transition for sliding effect */}
    <div
      className='flex transition-transform duration-500 ease-out'
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {cases.map((caseStudy, index) => (
        // Make each case study take up 100% of the width of the container
        <div key={index} className='min-w-full px-4 py-8 bg-black rounded-lg text-white'>
          <p>{caseStudy.text}</p>
          <p className='flex hover:underline items-center mt-4'>
            Learn more <img src={arrow} alt="arrow" className="ml-2" />
          </p>
        </div>
      ))}
    </div>
  </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className='absolute bottom-4 transform -translate-y-1/2 left-4 bg-gray-600 text-white px-2 py-1 rounded-full'
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className='absolute bottom-4 transform -translate-y-1/2 right-4 bg-gray-600 text-white px-2 py-1 rounded-full'
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cases;
