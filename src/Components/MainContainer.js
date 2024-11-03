import React, { useEffect, useState } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useStateValue } from '../Context/StateProvider';
import { getAllFoodItems } from '../utils/firebaseFunctions';
import { actionType } from '../Context/Reducer';
import RowContainer from './RowContainer';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';
import Service from '../pages/Frontend/Service'
import About from '../pages/Frontend/About/About';
import Team from '../pages/Frontend/Team/Team';
import Testimonials from '../pages/Frontend/Testimonials/Testimonials';
import Contact from '../pages/Frontend/Contact/Contact';
import ReserveTable from '../pages/Frontend/ReserveTable/ReserveTable';
import Footer  from './Footer';
export default function MainContainer() {
  const [{ foodItems ,cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {

  }, [scrollValue ,cartShow])

  const fetchData = async () => {
    try {
      const data = await getAllFoodItems();
      console.log("Fetched data from Firestore:", data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    } catch (error) {
      console.error("Error fetching food items: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  // Debugging logs
  console.log("Current foodItems in state:", foodItems);

  return (
    <div className="flex w-full h-auto flex-col justify-center items-center">
      <HomeContainer />
      {/* maincontainer  */}
      <section className='w-full my-6'>
        <div className='w-full flex justify-between items-center'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content before:w-32 before:h-1 before:-bottom-2 before:left-0  transition-all ease-in-out duration-100 '>
            Our fresh & healthy fruits
          </p>
          <div className='hidden md:flex gap-3 items-center'>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-300)}
            >
              <MdChevronLeft className='text-lg text-white' />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(+300)}
            >
              <MdChevronRight className='text-lg text-white' />
            </motion.div>
          </div>
        </div>

        {/* ROWCONTAINER  */}
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems.filter(n => n.category === "fruits")}
        />
      </section>
      {/* menuContainer  */}
      <MenuContainer />
      {/* CartContainer  */}
     {
       cartShow && (
         <CartContainer />
       )
     }
    {/* FrontEnd  */}
    <Service />
    <About/>
    <Team/>
    <Testimonials/>
    <ReserveTable/>
    <Contact/>
    {/* footer */}
    <Footer />
    </div>
  );
}
