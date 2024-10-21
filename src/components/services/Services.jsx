import React from 'react';
import arrow from '../../assets/images/arrow.png';
import seo from '../../assets/images/illustrationseo.png';
import smm from '../../assets/images/illustrationsmm.png';
import anal from '../../assets/images/illustrationanalytics.png';
import ppc from '../../assets/images/illustrationpay.png';
import coc from '../../assets/images/illustrationcontentc.png';
import emm from '../../assets/images/emailm.png';

const Services = () => {
  const Card = ({ bgColor, title, image }) => {
    return (
      <div className={`rounded-lg ${bgColor} flex flex-row gap-4 transition-all duration-300 hover:bg-black shadow-[0px_4px_10px_rgba(0,0,0,0.2)] hover:text-white  p-4`}>
        <div className='flex flex-col justify-between '>
        <h1>{title}</h1>
        <p>
          <img src={arrow} alt="arrow" /> Learn more
        </p></div>
        <div>
            <img className='p-3' src={image} alt="" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <section id="services" className=' mt-[10vh] mb-[15vh]'>
        <div className='items-center md:items-left my-6 md:flex-row md'>
          <h1 className='font-bold text-2xl my-3'>Services Section</h1>
          <p>
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card bgColor="bg-[#F3F3F3]" title="Search engine optimization" image={seo} />
          <Card bgColor="bg-[#B9FF66]" title="Pay-per-click advertising" image={ppc} />
          <Card bgColor="bg-[#B9FF66]" title="Social Media Marketing" image={smm} />
          <Card bgColor="bg-[#F3F3F3]" title="Email Marketing" image={emm}/>
          <Card bgColor="bg-[#F3F3F3]" title="content Creation" image={coc} />
          <Card bgColor="bg-[#B9FF66]" title="Analytics and Tracking" image={anal}/>
          
        </div>
      </section>
    </div>
  );
};

export default Services;
