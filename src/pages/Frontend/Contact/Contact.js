import React from 'react'

export default function Contact() {
  return (
    <>
      <p className="my-4 text-2xl font-semibold capitalize text-headingColor relative before:absolute 
                before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content
                before:w-20 before:h-1 before:-bottom-2 before:left-0 transition-all ease-in-out duration-100 mr-auto"
        id='team'>
        Contact Us Now
      </p>
      <div className="team">
        <h2 className='mb-2'>~ Contact Us ~</h2>
      </div>
      <section class="contact_part section_padding ">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="contact_part_iner">
                <h3>Contact Us</h3>
                <div class="single_contact_part">
                  <h5>address</h5>
                  <p>240, Kings street, New York city USA</p>
                </div>
                <div class="single_contact_part">
                  <h5>WE ARE OPEN</h5>
                  <p>Mon - Fri (9.00-19.00)</p>
                  <p>Sat - Sun (9.00-19.00)</p>
                </div>
                <div class="single_contact_part">
                  <h5>RESERVATION</h5>
                  <p>+880 367 251 167</p>
                  <span>barires@contact.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
