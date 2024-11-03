import React from 'react';
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
import chef4 from '../../../Images/chef4.webp'; // Use WebP format if possible
import chef from '../../../Images/chef.webp';
import chef2 from '../../../Images/chef2.webp';
import chef3 from '../../../Images/chef3.webp';

export default function Team() {
    const teamMembers = [
        {
            name: "John Smooth",
            position: "Restaurant Owner",
            image: chef4,
            socials: {
                twitter: "https://twitter.com/johnsmooth",
                facebook: "https://facebook.com/johnsmooth",
                googlePlus: "https://plus.google.com/johnsmooth",
                instagram: "https://instagram.com/johnsmooth"
            }
        },
        {
            name: "Rebeca Welson",
            position: "Head Chef",
            image: chef2,
            socials: {
                twitter: "https://twitter.com/rebeca",
                facebook: "https://facebook.com/rebeca",
                googlePlus: "https://plus.google.com/rebeca",
                instagram: "https://instagram.com/rebeca"
            }
        },
        {
            name: "Kharl Branyt",
            position: "Chef",
            image: chef3,
            socials: {
                twitter: "https://twitter.com/kharl",
                facebook: "https://facebook.com/kharl",
                googlePlus: "https://plus.google.com/kharl",
                instagram: "https://instagram.com/kharl"
            }
        },
        {
            name: "Luke Simon",
            position: "Chef",
            image: chef,
            socials: {
                twitter: "https://twitter.com/luke",
                facebook: "https://facebook.com/luke",
                googlePlus: "https://plus.google.com/luke",
                instagram: "https://instagram.com/luke"
            }
        }
    ];
    return (
        <>
            <p className="mt-2 text-2xl font-semibold capitalize text-headingColor relative before:absolute 
                before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content
                before:w-20 before:h-1 before:-bottom-2 before:left-0 transition-all ease-in-out duration-100 mr-auto" 
                id='team'>
                Our Team
            </p>
            <section className="ftco-section">
                <div className="container mx-auto">
                    <div className="row justify-content-center mb-3 pb-2">
                        <div className="col-md-12 team text-center heading-section">
                            <h2 className='mb-2'>~ Our Master Chef ~</h2>
                        </div>
                    </div>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp" key={index}>
                                <div className="staff card-container">
                                    <div className="img-container">
                                        {
                                            console.log("member image",member.image)
                                        }
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="img-fluid chef-img" 
                                            loading="lazy" // Native lazy loading
                                        />
                                    </div>
                                    <div className="text pt-4">
                                        <h3>{member.name}</h3>
                                        <span className="position mb-2">{member.position}</span>
                                        <div className="faded">
                                            <ul className="ftco-social d-flex">
                                                <li>
                                                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                                                        <FaTwitter />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                                                        <FaFacebookF />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={member.socials.googlePlus} target="_blank" rel="noopener noreferrer">
                                                        <FaGooglePlusG />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                                        <FaInstagram />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
