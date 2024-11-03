import React from 'react'
import Delivery from '../Images/delivery.png'
import HeroBg from "../Images/heroBg.png"
import { heroData } from '../utils/data'

export default function HomeContainer() {
    return (
        <section className="grid grid-col-1 md:grid-cols-2 gap-2 w-full " id='home'>
            {/* 1st column  */}
            <div className=" py-2 flex-1 flex flex-col items-start justify-center  gap-6">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
                    <p className='text-base text-orange-500 font-semibold '>Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} alt="Delivery img" className='w-full h-full object-contain' />

                    </div>
                </div>

                <p className='text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor mt-2 md:mt-4'>The Fastest Delivery in
                    <span className='text-orange-600 text-[2.5rem] lg:text-[4rem] '>Your City</span>
                </p>

                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto. Consequuntur, architecto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto.
                </p>
                <button type='button' className='bg-gradient-to-br rounded-lg from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 hover:shadow-lg transition-all ease-in-out duration-10 '>
                    Order Now
                </button>
            </div>
            {/* second col  */}
            <div className="py-2 flex-1 flex items-center relative">
                <img
                    src={HeroBg}
                    className="ml-auto h-420 w-full lg:w-auto lg:h-510"
                    alt="hero-bg"
                />

                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-4 my-6 lg:my-4">
                    <div className="grid grid-cols-2 gap-4 ">
                        {heroData && heroData.slice(0, 4).map((n) => (
                            <div
                                key={n.id}
                                className=" bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
                            >
                                <img
                                    src={n.imageSrc}
                                    className="w-32  object-cover rounded-full"
                                    alt={n.name}
                                />
                                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
                                <p className="text-[12px] lg:text-sm text-lightTextGray font-semibold lg:my-3 text-center">{n.description}</p>
                                <p className="text-sm font-semibold">
                                    <span className="text-xs text-red-600">$</span> {n.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    )
}
