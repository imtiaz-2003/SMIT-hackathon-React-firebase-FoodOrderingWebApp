import React from 'react';
import { FaCakeCandles } from "react-icons/fa6";
import { MdOutlineDiversity1 } from "react-icons/md";
import { GiFireplace } from "react-icons/gi";

export default function Service() {
  return (
    <>
      <p
        className="my-2 text-2xl font-semibold capitalize text-headingColor relative before:absolute 
            before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content
             before:w-20 before:h-1 before:-bottom-2 before:left-0  transition-all ease-in-out duration-100 mr-auto" id='service'>
        Services
      </p>

      <section className="ftco-section pt-1 ">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-12 team ">
              <h2 className="font-semibold">~ Catering Services ~</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center fadeInUp ftco-animated">
              <div className="media block-6 services d-block">
                <div className="icon rounded-full  d-flex justify-content-center align-items-center mx-auto">
                  <FaCakeCandles className='i' />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Birthday Party</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts; it is almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center fadeInUp ftco-animated">
              <div className="media block-6 services d-block">
                <div className="icon rounded-full d-flex justify-content-center align-items-center mx-auto">
                  <MdOutlineDiversity1 className='i' />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Business Meetings</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts; it is almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center fadeInUp ftco-animated">
              <div className="media block-6 services d-block">
                <div className="icon rounded-full d-flex justify-content-center align-items-center mx-auto">
                  <GiFireplace className='i' />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Wedding Party</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts; it is almost unorthographic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
