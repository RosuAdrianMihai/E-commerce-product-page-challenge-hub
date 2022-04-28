import React from "react";
import shoeImage from "../images/image-product-1-thumbnail.jpg";
import trashImage from "../images/icon-delete.svg"

function Cart( { itemsInCart, setItemsInCart, cart, menuState, imageSlide } ){
    let totalSum = itemsInCart*125;

    if(!cart)
    return;
    
    if(itemsInCart > 0){
 return(
     <div className={`absolute z-20 bg-white w-[95%] left-[2.5%] right-[2.5%] rounded-md mt-[5.5vh] ${menuState || imageSlide? "z-[-1] md:z-[0]": ""} sm:w-[50%] sm:left-[25%] sm:right-[25%] md:w-[25vw] md:max-w-[500px] md:-left-[17vw] md:shadow-2xl lg:-left-[13vw]`}>
         <h1 className="px-4 py-4 font-bold text-headers-hover">Cart</h1>
         <hr/>

         <div className="px-5 py-6">
           <div className="flex items-center justify-between">
              <img src={shoeImage} alt="shoe" className="w-12 h-12 rounded-md cursor-pointer"/>

              <div className="text-default">
                  <p>Autumn Limited Edition...</p>
                  <p>$125.00 x {itemsInCart} <span className="font-bold text-black">${totalSum}.00</span></p>
              </div>

              <img onClick={ () => setItemsInCart(0)} src={trashImage} alt="delete-product" className="cursor-pointer"/>
           </div>
           <button type="button" className="w-full py-3 mt-5 font-semibold text-white rounded-md bg-main-orange md:hover:bg-orange-300">Checkout</button>
         </div>
     </div>
 )
    } else return(
        <div className={`absolute z-20 bg-white w-[95%] left-[2.5%] right-[2.5%] rounded-md mt-[5.5vh] ${menuState? "z-[-5]": ""} sm:w-[50%] sm:left-[25%] sm:right-[25%] md:w-[25vw] md:max-w-[500px] md:-left-[17vw] md:shadow-2xl lg:-left-[13vw]`}>
         <h1 className="px-4 py-4 font-bold text-headers-hover">Cart</h1>
         <hr/>
         <div className="flex items-center justify-center py-16">
             <p className="font-semibold text-default">Your cart is empty</p>
         </div>
         </div>
    )
}

export default Cart;