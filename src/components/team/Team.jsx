import React, { useState } from 'react';
import linkedin from '../../assets/images/linkedin.png';
import teamm from '../../assets/images/teamm1.png';

const Team = () => {
  // State to control whether to show all team members or just the initial 4
  const [showAll, setShowAll] = useState(false);

  // Sample team data
  const teamMembers = [
    { name: "Jane Doe", position: "Director of Operations", description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills", image: teamm },
    { name: "John Smith", position: "CEO and Founder", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy", image: teamm },
    { name: "Emily Brown", position: "Marketing Manager", description: "5+ years of experience in digital marketing. Strong creative and problem-solving skills", image: teamm },
    { name: "Sarah Wilson", position: "Content Writer", description: "4+ years of experience in digital marketing. Expertise in blog writing, social media content, and email marketing", image: teamm },
    { name: "Michael Davis", position: "UX/UI Designer", description: "6+ years of experience in digital marketing. Strong design and user experience skills", image: teamm },
    { name: "Laura Thompson", position: "Product Manager", description: "8+ years of experience in digital marketing. Strong project management and team leadership skills", image: teamm },
    { name: "Jim Thompson", position: "Product Manager", description: "8+ years of experience in digital marketing. Strong project management and team leadership skills", image: teamm },
    { name: "Laura Hill", position: "Product Manager", description: "8+ years of experience in digital marketing. Strong project management and team leadership skills", image: teamm },
  ];

  // Display the first 4 team members initially, and all if "showAll" is true
  const displayedTeamMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  // Card component for displaying each team member
  const Card = ({ position, name, image, description }) => {
    return (
      <div className="p-4 border-black border-solid border-2 rounded-lg mb-4">
        <div className='flex relative py-6 flex-row gap-3 items-center'>
          <img className="w-[100px] h-[100px]" src={image} alt="Team member" />
          <div>
            <h2 className='hover:underline mb-7'>{name}</h2>
            <p>{position}</p>
            <div className='absolute top-2 right-2'>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t-2 py-4 border-black'>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='flex mt-[8vh] gap-4 my-5 flex-col md:flex-row items-center'>
        <h1 className='text-center text-2xl font-semibold'>Team</h1>
        <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>

      {/* Team members displayed as a grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {displayedTeamMembers.map((member, index) => (
          <Card 
            key={index}
            image={member.image} 
            name={member.name} 
            position={member.position} 
            description={member.description} 
          />
        ))}
      </div>

      {/* See All/Show Less button */}
      <div className="mt-4 mb-4 text-center">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 bg-black w-full text-white rounded hover:bg-blue-600 transition"
          >
            See All
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="px-4 py-2 bg-black w-full text-white rounded hover:bg-blue-600 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Team;
