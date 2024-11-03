import React, {useState } from "react";

import { IoFastFood } from "react-icons/io5";
import {categories} from "../utils/data";

import { motion } from "framer-motion";
import { useStateValue } from "../Context/StateProvider";
import RowContainer from "./RowContainer";

export default function MenuContainer() {
    const [filter ,setFilter] = useState("chicken");
    const [{ foodItems }, dispatch] = useStateValue();
    // console.log(categories);

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center ">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative before:absolute 
            before:rounded-lg before:bg-gradient-to-tr from-orange-400 to-orange-600 before:content
             before:w-24 before:h-1 before:-bottom-2 before:left-0  transition-all ease-in-out duration-100 mr-auto"
        >
          Our Hot Dishes
        </p>
        <div className="mt-2 xs:mt-3 sm:mt-3 team">
          <h2>~ Menu ~</h2>
        </div>
        <div className="w-full flex items-center lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
         {/* catagories rerender  */}
         { categories && categories.map(category => (
             <motion.div 
            whileTap={{scale:0.75}}
             key={category.id}
             className={` group  ${filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-white' } bg- w-24 min-w-[94px]  group-hover:bg-cartNumBg h-28 cursor-pointer rounded-lg 
                          drop-shadow-xl flex flex-col gap-3 items-center justify-center `}
                          onClick={()=>setFilter(category.urlParamName)}
                          >
             <div className= {
                ` ${filter === category.urlParamName ? 'bg-white' : 'bg-cartNumBg' }   w-10 h-10 rounded-full shadow-lg  bg-cartNumBg group-hover:bg-white flex items-center justify-center`
             }
             >
               <IoFastFood className={`${filter === category.urlParamName ? 'bg-white' : 'text-card' } group-hover:text-textColor text-lg`} />
             </div>
             <p className={`text-sm ${filter === category.urlParamName ? 'text-white' : 'text-textColor' } group-hover:text-textColor`}>
              {category.name}
             </p>
           </motion.div>
         ))}
        </div>
         {/* fetching filter foodItems in rowContainer */}
         <div className="w-full ">
            <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)} />


         </div>


      </div>
    </section>
  );
}
