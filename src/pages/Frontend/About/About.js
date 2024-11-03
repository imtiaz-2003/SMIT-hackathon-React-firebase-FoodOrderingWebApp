import React from 'react';
import about from '../../../Images/about.jpg';
import about1 from '../../../Images/about-1 .jpg';

export default function About() {
  return (
    <>

      <p className="mt-2 text-2xl font-semibold capitalize text-headingColor relative before:absolute 
                before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content
                before:w-20 before:h-1 before:-bottom-2 before:left-0 transition-all ease-in-out duration-100 mr-auto" id='about'>
        About us
      </p>
      <section className="ftco-section ftco-wrap-about mt-2">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex">
              <div className="img img-1 mr-md-2" style={{ width: "310px", height: '450px', overflow: 'hidden' }}>
                <img src={about} alt="Image" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="img img-2 ml-md-2" style={{ width: "310px", height: '450px', overflow: 'hidden' }}>
                <img src={about1} alt="Image" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-md-5 wrap-about pt-3 pt-md-3 pb-md-3 ftco-animate fadeInUp ftco-animated">
              <div className=" mb-4 my-3 my-md-0">
                <h1 className=" subheading sm:text-2xl xs:text-2xl lg:text-3xl md:text-3xl t font-bold  text-orange-600 ">About</h1>
                <h2 className="mb-4 lg:text-2xl text-headingColor sm:text-xl xs:text-xl">Restaurant</h2>
              </div>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                Maps and let everyone get in touch with you via the functional contact form. Restauco is here to make a difference in the restaurant business.
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p className="time">
                <span>Mon - Fri <strong className='text-orange-600'>8 AM - 11 PM</strong></span><br /><br />
                {/* Read More btn  */}
                <button type='button' className='bg-gradient-to-br rounded-lg from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 hover:shadow-lg transition-all ease-in-out duration-10 '>
                  Read More
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
