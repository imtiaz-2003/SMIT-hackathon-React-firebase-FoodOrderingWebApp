import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import EmptyCart from '../Images/emptyCart.svg';
import { motion } from 'framer-motion';
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/Reducer';
import CartitemContainer from './CartitemContainer';
import { message } from 'antd';

export default function CartContainer() {
    const [tot, setTot] = useState(0);
    const [flag, setFlag] = useState(0); // New state for flag

    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    useEffect(() => {
        let totalPrice = cartItems.reduce((accumulator, item) => {
            return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
    }, [cartItems, flag]); // Watch cartItems and flag for changes

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: [],
        });

        localStorage.setItem("cartItems", JSON.stringify([]));
    };

    const handleCheckout = () => {
        message.warning('Payment method is not integrated.');
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: cartShow ? 1 : 0, x: cartShow ? 0 : 200 }}
            exit={{ opacity: 0, x: 200 }}
            className='w-full md:w-340 flex flex-col bg-white drop-shadow-md h-screen top-0 right-0 fixed z-[101]'
        >
            <div className="w-full flex justify-between items-center cursor-pointer p-4">
                <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>
                <p className='text-lg text-textColor font-semibold'>Shopping Cart</p>
                <motion.p
                    whileTap={{ scale: 0.75 }}
                    className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-300 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'
                    onClick={clearCart}
                >
                    Clear <RiRefreshFill />
                </motion.p>
            </div>
            {cartItems && cartItems.length > 0 ? (
                <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
                    <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                        {cartItems.map(item => (
                            <CartitemContainer
                                key={item.id}
                                item={item}
                                setFlag={setFlag} // Pass setFlag
                                flag={flag}       // Pass flag
                            />
                        ))}
                    </div>
                    <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-lg text-gray-400">Subtotal</p>
                            <p className="text-lg text-gray-400">${tot}</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-lg text-gray-400">Delivery</p>
                            <p className="text-lg text-gray-400">$2.5</p>
                        </div>
                        <div className="w-full border-b border-gray-600 my-2"></div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-200 text-xl font-semibold">Total</p>
                            <p className="text-gray-200 text-xl font-semibold">${tot + 2.5}</p>
                        </div>
                        {user ? (
                            <motion.button
                                whileTap={{ scale: 0.75 }}
                                type='button'
                                className="w-full p-2 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full hover:shadow-lg text-gray-50 my-2"
                                onClick={handleCheckout} // Add click handler here
                            >
                                Checkout
                            </motion.button>
                        ) : (
                            <motion.button
                                whileTap={{ scale: 0.75 }}
                                type='button'
                                className="w-full p-2 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full hover:shadow-lg text-gray-50 my-2"
                            >
                                Login to Checkout
                            </motion.button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                    <img src={EmptyCart} className="w-300" alt="empty cart" />
                    <p className="text-xl text-textColor font-semibold">Your cart is Empty</p>
                </div>
            )}
        </motion.div>
    );
}
