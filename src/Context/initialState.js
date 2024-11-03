import { fecthUser, fetchCart } from "../utils/fetchLocalStorageData";

const userInfo = fecthUser ();
const cartInfo = fetchCart ();

export const initialState = {
    user : userInfo ,
    foodItems : [],
    cartShow : false,
    cartItems: cartInfo,
}