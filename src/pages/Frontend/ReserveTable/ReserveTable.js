import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { message } from 'antd'; // If using Ant Design for notifications

const firestore = getFirestore();

export default function ReserveTable() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        time: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Adding the reservation data to Firestore
          await addDoc(collection(firestore, 'reservations'), {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            guests: formData.guests,
            date: formData.date,
            time: formData.time,
            timestamp: new Date(), // Optional: Add timestamp of reservation
          });
    
          // Clear the form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            guests: '',
            date: '',
            time: ''
          });
          console.log(formData);
          // Show success message
          message.success('Reservation successful!');
    
        } catch (error) {
          console.error('Error adding reservation: ', error);
          message.error('Failed to make a reservation. Please try again.');
        }
      };

    return (
        <>
            <p className="mt-1 text-2xl font-semibold capitalize text-headingColor relative before:absolute 
                before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content
                before:w-20 before:h-1 before:-bottom-2 before:left-0 transition-all ease-in-out duration-100 mr-auto"
                id='reserveTable'>
                Join Us Now
            </p>

            <div className="team ">
                <h2 className='mb-2'>~ Reserve Table ~</h2>
            </div>
            <div className="reservation-section mt-3">
                <div className="container-fluid">
                    <div className="row lg:w-[80%] md:w-[80%] xs:w-full sm:w-full mx-auto" id='tableForm'>
                        <div className="col-lg-6 col-md-12 reservation-form xs:w-100 sm:w-100">
                            <h3 className="reservation-title">Reservation</h3>
                            <h1 className="form-title">Book Your Table</h1>
                            <form onSubmit={handleSubmit} >
                                <div class="row">
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name" // Placeholder added
                                        />
                                    </div>
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your email" // Placeholder added
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="phone" className="form-label">Phone:</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder=" phone number" // Placeholder added
                                        />
                                    </div>
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="guests" className="form-label">Number of Guests:</label>
                                        <select
                                            className="form-select "
                                            id="guests"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Guests</option>
                                            <option value="1">1 Person</option>
                                            <option value="2">2 People</option>
                                            <option value="3">3 People</option>
                                            <option value="4">4 People</option>
                                            <option value="5">5 People</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="date" className="form-label">Date:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="time" className="form-label">Time:</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-between " id='rowBtn'>
                                    <div className=" col w-20 ">
                                        <button type="submit" className="btn btn-primary ">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 opening-time my-5 xs:w-100 sm:w-100">
                            <h3 className="opening-title">Opening Time</h3>
                            <ul className="list-unstyled">
                                <li>Sunday <span>8:00 am - 11:00 pm</span></li>
                                <li>Monday <span>8:00 am - 11:00 pm</span></li>
                                <li>Tuesday <span>8:00 am - 11:00 pm</span></li>
                                <li>Wednesday <span>8:00 am - 11:00 pm</span></li>
                                <li>Thursday <span>8:00 am - 11:00 pm</span></li>
                                <li>Friday <span>8:00 am - 11:00 pm</span></li>
                                <li>Saturday <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
