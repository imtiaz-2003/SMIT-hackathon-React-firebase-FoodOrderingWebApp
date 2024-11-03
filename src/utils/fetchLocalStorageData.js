
export const fecthUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined" 
    ? JSON.parse(localStorage.getItem('user'))
    : localStorage.clear();
    return userInfo;
}
// fetchCart Items 

export const fetchCart = () => {
    const cartInfo = localStorage.getItem('cartItems') !== "undefined" 
    ? JSON.parse(localStorage.getItem('cartItems'))
    : localStorage.clear();
    return cartInfo;
}
