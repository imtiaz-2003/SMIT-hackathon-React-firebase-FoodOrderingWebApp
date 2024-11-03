import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa';
import insta1 from "../../Images/insta-1.jpg"

import insta2 from "../../Images/insta-2.jpg"

import insta3 from "../../Images/insta-3.jpg"

import insta4 from "../../Images/insta-4.jpg"
import insta5 from "../../Images/insta-5.jpg"
import insta6 from "../../Images/insta-6.jpg"

import { Link } from 'react-router-dom';
export default function TopFooter() {
    return (
        <>
            <footer className="ftco-footer w-screen ftco-bg-dark ftco-section rounded-none ">
                <div className="container-fluid px-md-5 px-3">
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2" id='logo'>Tastique</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                                    <li className="ftco-animate"><a href="#"><FaTwitter /></a></li>
                                    <li className="ftco-animate"><a href="#"><FaFacebook /></a></li>
                                    <li className="ftco-animate"><a href="#"><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Open Hours</h2>
                                <ul className="list-unstyled open-hours">
                                    <li className="d-flex"><span>Sunday</span><span>9:00 - 02:00</span></li>
                                    <li className="d-flex"><span>Monday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Tuesday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Wednesday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Thursday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Friday</span><span>9:00 - 02:00</span></li>
                                    <li className="d-flex"><span>Saturday</span><span>Closed</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Newsletter</h2>
                                <p>Far far away, behind the word mountains, far from the countries.</p>
                                <form action="#" className="subscribe-form mt-2">
                                    <div className="form-group">
                                        <input type="text" className="form-control mb-2 text-center text-white" placeholder="Enter email address" />
                                        <input type="submit" value="Subscribe" className="form-control submit px-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Gallary</h2>
                                <div className="thumb d-sm-flex ">
                                    <Link className="thumb-menu img">
                                        <img src={insta1} alt="insta1" className='image-fluid object-cover' />
                                    </Link>
                                    <Link className="thumb-menu img">
                                        <img src={insta2} alt="insta2" className='image-fluid object-cover' />
                                    </Link>
                                    <Link className="thumb-menu img">
                                        <img src={insta3} alt="insta3" className='image-fluid object-cover' />
                                    </Link>

                                </div>
                                <div className="thumb d-flex ">
                                    <Link className="thumb-menu img">
                                        <img src={insta4} alt="insta4" className='image-fluid object-cover' />
                                    </Link>
                                    <Link className="thumb-menu img">
                                        <img src={insta5} alt="insta5" className='image-fluid object-cover' />
                                    </Link>
                                    <Link className="thumb-menu img">
                                        <img src={insta6} alt="insta6" className='image-fluid object-cover' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row w-full" id="lastfooter">
                    <div className="col-md-12 flex justify-center items-center">
                        <p className="text-white d-inline mb-0">
                            Copyright &copy; {new Date().getFullYear()} All rights reserved | This Website is made with
                            <span className="inline-flex items-center">
                                <FaHeart className="text-orange-600 mx-1" /> by Imtiaz
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
