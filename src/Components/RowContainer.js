import React, { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import notFound from '../Images/NotFound.svg'
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/Reducer';

export default function RowContainer({ flag, data , scrollValue}) {
const [items , setItems] = useState([]);
 const [{cartItems} , dispatch] = useStateValue()

  const addToCart = () => {
   
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems : items,
    });
    localStorage.setItem("cartItems" , JSON.stringify(items))
  };



  console.log("Row container data =>  " + data);
  const RowContainer = React.useRef();
  useEffect(() => {
     RowContainer.current.scrollLeft += scrollValue;

  },[scrollValue])

  useEffect(() => {
    addToCart();

  },[items])

  const overflowClass = flag ? 'overflow-x-auto scrollbar-none ' : 'overflow-x-hidden flex-wrap justify-center';

  return (
    <>
    
    <div ref={RowContainer} className={`w-full flex gap-3 items-center scroll-smooth  ${overflowClass}`}>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="w-[170px] min-w-[175px] md:min-w-[250px] md:w-[250px] h-auto my-12 bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between">
             <motion.div whileTap={{ scale: 1.2 }}
               className='w-32 h-32 -mt-8 drop-shadow-2xl' >
             <img 
                
                src={item.imageURL} 
                alt={item.name}
                className='w-full h-full object-contain'
              
              />
             </motion.div>
              <motion.div 
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
             onClick={() => setItems([...cartItems , item])}
             >
                <MdShoppingBasket className='text-white' />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className='text-textColor font-semibold text-base md:text-lg'>{item?.title}</p>
              <p className='mt-1 text-sm text-gray-500'>{item?.calories} calories</p>
              <div className="flex items-center gap-8">
                <p className='text-lg text-headingColor font-semibold'>
                  <span className='text-sm text-red-500'>$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={notFound} alt="" className="h-[200px]" />
          <p className='text-xl text-headingColor font-semibold my-3'>No items available.</p>
        </div>
      )}
    </div>
    </>
  );
}
