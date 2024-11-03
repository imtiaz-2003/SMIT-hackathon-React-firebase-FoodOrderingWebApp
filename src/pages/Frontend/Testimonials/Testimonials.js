import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import person1 from '../../../Images/person1.jpg';
import person2 from '../../../Images/person2.jpg';
import person3 from '../../../Images/person3.jpg';
import person4 from '../../../Images/person4.jpg';

export default function Testimonials() {
  return (
    <>
     <p className="mt-2 text-2xl font-semibold capitalize text-headingColor relative before:absolute 
                before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content
                before:w-20 before:h-1 before:-bottom-2 before:left-0 transition-all ease-in-out duration-100 mr-auto">
                Testinomials 
            </p>
      <div className="testimonial" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headline text-center  team">
                <h2 className=" position-relative d-inline-block">~ Our Guests says ~</h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-8 offset-lg-2 text-center my-1">
              <div id="carouselExampleIndicatorsTwo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button  
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsTwo"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button 
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsTwo"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsTwo"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsTwo"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonial-wrapper">
                      <div className="row">
                        <div className="col-sm-12">
                          <img src={person1} alt="user" className="img-fluid" />
                        </div>
                        {/* Rating stars */}
                        <div className="rating">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                        <div className="username">
                          <h3>Martin Joha, Co-Founder / CEO</h3>
                          <span>Fast Company Ltd.</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa odit aperiam rem nulla qui
                            vero ullam? Magnam, iusto atque. Non ipsa odit aperiam rem nulla qui vero ullam? Magnam, iusto atque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-wrapper">
                      <div className="row">
                        <div className="col-sm-12">
                          <img src={person2} alt="user" className="img-fluid" />
                        </div>
                         {/* Rating stars */}
                         <div className="rating">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                        <div className="username">
                          <h3>John Doe, CTO</h3>
                          <span>Tech Solutions</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa odit aperiam rem nulla qui
                            vero ullam? Magnam, iusto atque. Non ipsa odit aperiam rem nulla qui vero ullam? Magnam, iusto atque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-wrapper">
                      <div className="row">
                        <div className="col-sm-12">
                          <img src={person3} alt="user" className="img-fluid" />
                        </div>
                         {/* Rating stars */}
                         <div className="rating">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                        <div className="username">
                          <h3>Jane Smith, COO</h3>
                          <span>Innovate Corp.</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa odit aperiam rem nulla qui
                            vero ullam? Magnam, iusto atque. Non ipsa odit aperiam rem nulla qui vero ullam? Magnam, iusto atque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-wrapper">
                      <div className="row">
                        <div className="col-sm-12">
                          <img src={person4} alt="user" className="img-fluid" />
                        </div>
                         {/* Rating stars */}
                         <div className="rating">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                        <div className="username">
                          <h3>Emma Brown, CFO</h3>
                          <span>Finance Experts</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa odit aperiam rem nulla qui
                            vero ullam? Magnam, iusto atque. Non ipsa odit aperiam rem nulla qui vero ullam? Magnam, iusto atque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button   id='btnicon'
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsTwo"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon text-black" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button 
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsTwo"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
