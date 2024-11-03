import React from 'react';
import { useState } from 'react';
// import { signInWithPopup } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from '../config/firebase.config';
import { FaShoppingCart } from "react-icons/fa";
import { MdAdd, MdAdminPanelSettings, MdFoodBank, MdLogout } from "react-icons/md";
import Logo from "../Images/logo.png";
import avatar from "../Images/avatar.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { actionType } from "../Context/Reducer";
import { Link as ScrollLink } from 'react-scroll';
export default function Header() {
    const firebaseAuth = getAuth(app);
    const firestore = getFirestore(app);
    const provider = new GoogleAuthProvider();
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    const [isMenu, setisMenu] = useState(false);

    const Login = async () => {
        try {
            if (!user) {
                const result = await signInWithPopup(firebaseAuth, provider);
                const providerData = result.user.providerData[0];
    
                // Save user data to Firestore
                await setDoc(doc(firestore, "users", result.user.uid), {
                    uid: result.user.uid,
                    displayName: providerData.displayName,
                    email: providerData.email,
                    photoURL: providerData.photoURL,
                    providerId: providerData.providerId,
                });
    
                dispatch({
                    type: actionType.SET_USER,
                    user: providerData,
                });
                localStorage.setItem("user", JSON.stringify(providerData));
            } else {
                setisMenu(!isMenu);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
        }
    };
    

    const Logout = async () => {
        try {
            setisMenu(false);
            await firebaseAuth.signOut();
            localStorage.clear();
            dispatch({
                type: actionType.SET_USER,
                user: null,
            });
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };



    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }



    return (
        <header className="fixed z-50 w-screen p-2 px-4 md:p-4 md:px-16 bg-primary">
            {/* desktop and tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to="home" className="flex items-center gap-2">
                    <img src={Logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold' id='logo'><span className='text-orange-600 text-[3rem]'>T</span>astique</p>
                </Link>

                <div className="flex items-center gap-8" id='navLinks'>
                    <motion.ul
                  
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='items-center gap-8 flex' id='navitems'>
                        <Link to="/"><li onClick={() => { setisMenu(false) }} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li></Link>
                        <ScrollLink to="menu"><li onClick={() => { setisMenu(false) }} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li></ScrollLink>
                        <ScrollLink to="about"><li onClick={() => { setisMenu(false) }} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li></ScrollLink>
                        <ScrollLink to="service"><li onClick={() => { setisMenu(false) }} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services</li></ScrollLink>
                        <ScrollLink to="reserveTable"><li onClick={() => { setisMenu(false) }} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Book Table</li></ScrollLink>

                        {user && user.email === "shanbohar0123@gmail.com" && (
                            <Link to="/dashboard">
                                <p className='px-2 py-2 flex items-center gap-3 cursor-pointer bg-orange-700 hover:bg-black transition-all duration-100 ease-in-out text-white rounded-lg text-base' onClick={() => setisMenu(false)}>
                                    <MdFoodBank /> DashBoard
                                </p>
                            </Link>
                        )}
                    </motion.ul>

                    {/* shopping cart */}
                    <div className="relative flex items-center justify-center" onClick={showCart}>
                        <FaShoppingCart className='text-2xl text-textColor ml-8 mb-2 cursor-pointer' />
                        {
                            cartItems && cartItems.length > 0 && (
                                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                                    <p className='text-white font-semibold text-xs'> {cartItems.length} </p>
                                </div>
                            )
                        }
                    </div>

                    {/* user profile image */}
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : avatar}
                            alt="userProfile"
                            className='w-10 h-10 min-w-[40px] min-h-[40px] rounded-full drop-shadow-xl ml-11 cursor-pointer'
                            onClick={Login}
                        />
                        <span className='text-base text-textColor flex items-center justify-center'>{user ? "Hi ! " + user.displayName : 'Login Here'}</span>
                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-13 right-0"
                            >
                                {/* {user && user.email === "shanbohar0123@gmail.com" && (
                                    <Link to="/dashboard">
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setisMenu(false)}>
                                            Admin <MdAdd />
                                        </p>
                                    </Link>
                                )} */}
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base' onClick={Logout}>
                                    LogOut <MdLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="md:hidden flex w-full h-full items-center justify-between">
                {/* shopping cart */}
                <div className="relative flex items-center justify-center" onClick={showCart}>
                    <FaShoppingCart className='text-2xl text-textColor ml-8 mb-2 cursor-pointer' />
                    {
                        cartItems && cartItems.length > 0 && (
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className='text-white font-semibold text-xs'> {cartItems.length} </p>
                            </div>
                        )
                    }
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold' id='logo'><span className='text-orange-600 text-[2rem]'>T</span>astique</p>
                </Link>

                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : avatar}
                        alt="userProfile"
                        className='w-10 h-10 min-w-[40px] min-h-[40px] rounded-full drop-shadow-xl ml-11 cursor-pointer'
                        onClick={Login}
                    />
                    <span className='text-base text-textColor flex items-center justify-center'>{user ? "Hi ! " + user.displayName : 'Login Here'}</span>
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-13 right-0"
                        >
                            {user && user.email === "shanbohar0123@gmail.com" && (
                                <Link to="/dashboard">
                                    <p className='px-2 py-2 flex items-center gap-3 cursor-pointer bg-orange-700 hover:bg-black transition-all duration-100 ease-in-out text-white rounded-lg text-base' onClick={() => setisMenu(false)}>
                                        <MdFoodBank /> DashBoard
                                    </p>
                                </Link>
                            )}
                            <ul className='flex flex-col gap-3'>
                                <Link to='/' className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200">Home</Link>
                                <ScrollLink to='menu' className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200">Menu</ScrollLink>
                                <ScrollLink to='about' className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200">About Us</ScrollLink>
                                <ScrollLink to='service' className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200">Service</ScrollLink>
                                <ScrollLink to='reserveTable' className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200">Book Table</ScrollLink>
                            </ul>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-400 m-2 shadow-md rounded-md transition-all duration-100 ease-in-out justify-center bg-gray-300 text-textColor text-base' onClick={Logout}>
                                LogOut <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
}
