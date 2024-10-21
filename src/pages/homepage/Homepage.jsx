import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Logos from '../../components/logos/Logos';
import Services from '../../components/services/Services';
import Proposal from '../../components/proposal/Proposal';
import Cases from '../../components/cases/Cases';
import Process from '../../components/process/Process';
import Team from '../../components/team/Team';
import Testimonials from '../../components/testimonials/Testimonials';
import ContactUs from '../../components/contactus/ContactUs';
import Footer from '../../components/footer/Footer';

const Homepage = () => {
  return (
    <div className='mx-[5vw]'>
        <Navbar/>
        <Header/>
        <Logos/>
        <Services/>
        <Proposal/>
        <Cases/>
        <Process/>
        <Team/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
      

      <section id="pricing" className="h-screen bg-gray-400">
        <h1>Pricing Section</h1>
        <p>Content for the Pricing section...</p>
      </section>

      <section id="help" className="h-screen bg-gray-500">
        <h1>Help Section</h1>
        <p>Content for the Help section...</p>
      </section>

      
    </div>
  )
}

export default Homepage