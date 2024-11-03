import React, { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/Reducer';

let items = [];

export default function CartitemContainer({ item, setFlag, flag }) {
    const [qty, setQty] = useState(item.qty); // Start with item.qty instead of 1
    const [{ cartItems }, dispatch] = useStateValue();

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));

        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        });
    };

    const updateQty = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
            cartItems.forEach(item => {
                if (item.id === id) {
                    item.qty += 1;
                    setFlag(flag + 1);
                }
            });
            cartDispatch();
        } else {
            if (qty === 1) {
                items = cartItems.filter(item => item.id !== id);
                setFlag(flag + 1);
                cartDispatch();
            } else {
                setQty(qty - 1);
                cartItems.forEach(item => {
                    if (item.id === id) {
                        item.qty -= 1;
                        setFlag(flag + 1);
                    }
                });
                cartDispatch();
            }
        }
    };

    useEffect(() => {
        items = cartItems;
    }, [qty, items]);

    return (
        <div className="w-full flex items-center gap-2 p-1 px-2 rounded-lg bg-cartItem">
            <img className="w-10 h-10 rounded-full" src={item?.imageURL} alt="product" />
            <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-50">{item?.title}</p>
                <p className="text-sm block text-gray-300 font-semibold">${(item?.price * qty).toFixed(2)}</p>
            </div>
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("Remove", item?.id)}>
                    <BiMinus className="text-gray-50" />
                </motion.div>
                <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">{qty}</p>
                <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("add", item?.id)}>
                    <BiPlus className="text-gray-50" />
                </motion.div>
            </div>
        </div>
    );
}
