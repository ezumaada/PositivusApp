import React, { useState } from 'react';

const Testimonials = () => {
  // State to keep track of the current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO of XYZ Company",
      testimonial: "This company exceeded my expectations. Their team was responsive, knowledgeable, and provided excellent results.",
    },
    {
      name: "Michael Smith",
      role: "Marketing Director at ABC Corp",
      testimonial: "Working with them was a game changer. Our traffic and conversion rates skyrocketed after implementing their strategies.",
    },
    {
      name: "Sara Lee",
      role: "Founder of StartUp Hub",
      testimonial: "Highly recommend! They brought fresh, innovative ideas that helped our business stand out from the competition.",
    },
    {
      name: "Michael Smith",
      role: "Marketing Director at ABC Corp",
      testimonial: "Working with them was a game changer. Our traffic and conversion rates skyrocketed after implementing their strategies.",
    },
    {
      name: "Sara Lee",
      role: "Founder of StartUp Hub",
      testimonial: "Highly recommend! They brought fresh, innovative ideas that helped our business stand out from the competition.",
    },
    {
      name: "Michael Smith",
      role: "Marketing Director at ABC Corp",
      testimonial: "Working with them was a game changer. Our traffic and conversion rates skyrocketed after implementing their strategies.",
    },
    {
      name: "Sara Lee",
      role: "Founder of StartUp Hub",
      testimonial: "Highly recommend! They brought fresh, innovative ideas that helped our business stand out from the competition.",
    },
    {
        name: "Rachel Smith",
        role: "Sales Director at ABC Corp",
        testimonial: "Our conversion rates improved significantly after working with this team. The results were impressive.",
      },
  ];

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mx-auto mt-10 max-w-[1200px]">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <p className="text-gray-500">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>

      {/* Slider Wrapper with background on md and lg screens */}
      <div className="relative overflow-hidden bg-black md:bg-black lg:bg-black md:rounded-lg lg:rounded-lg p-6">
        {/* Testimonial Slider */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[75%] lg:min-w-[66.6%] bg-transparent text-white rounded-lg p-6 mx-2 border-2 border-[#B9FF66]"
              style={{ maxWidth: '100%' }}
            >
              <p className="text-md mb-4">"{testimonial.testimonial}"</p>
              <p className="font-bold text-[#B9FF66]">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          onClick={prevTestimonial}
        >
          Prev
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          onClick={nextTestimonial}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
