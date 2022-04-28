import React, { useState } from "react";
import Logo from "../images/logo.svg"
import CloseMenu from "../images/icon-close.svg"
import MobileMenu from "../images/icon-menu.svg"
import CartImage from "../images/icon-cart.svg"
import IconUser from "../images/image-avatar.png"
import Cart from "./Cart";

function Navbar( { setMenuStatus, menuState, itemsInCart, setItemsInCart, imageSlide } ){
   const [cart, setCart] = useState(false);

    return(
      <nav className="flex items-center px-[7%] py-[3vh] justify-between lg:h-[10vh] lg:px-[10vw] lg:py-[8vh] md:shadow-md">
          <div className="flex items-center">

          <img onClick={ () => {
          setMenuStatus(true)
          }
        } src={MobileMenu} alt="mobile-menu" className="h-4 pr-4 mt-1 cursor-pointer lg:hidden"/>    
          <img src={Logo} alt="Logo" className="h-5 cursor-pointer lg:mb-1 lg:h-6"/>

          <div className={`fixed ease-in-out duration-500 z-30 w-3/5 sm:w-1/3 md:w-[30%] h-screen pl-8 bg-white lg:static lg:h-auto lg:w-auto lg:block ${menuState ? "small:translate-x-[w-3/5]": "small:translate-x-[-100%]"} top-0 left-0 ${imageSlide?"md:z-[-10]": ""}`}>
              <img onClick={ () => {
                setMenuStatus(false);
                }
                  } src={CloseMenu} alt="close-menu" className="pt-[5vh] mb-[7vh] cursor-pointer lg:hidden"/>
              <ul 
              className="font-bold lg:flex lg:items-center lg:font-normal">
                  <li className="mb-3 lg:mb-0 lg:mr-4 xl:mr-8 text-default lg:hover:border-b-2 hover:border-main-orange hover:text-headers-hovers"> <a href="#">Collections</a> </li>
                  <li className="mb-3 lg:mb-0 lg:mr-4 xl:mr-8 text-default lg:hover:border-b-2 hover:border-main-orange hover:text-headers-hovers"> <a href="#">Men</a> </li>
                  <li className="mb-3 lg:mb-0 lg:mr-4 xl:mr-8 text-default lg:hover:border-b-2 hover:border-main-orange hover:text-headers-hovers"> <a href="#">Women</a> </li>
                  <li className="mb-3 lg:mb-0 lg:mr-4 xl:mr-8 text-default lg:hover:border-b-2 hover:border-main-orange hover:text-headers-hovers"> <a href="#">About</a> </li>
                  <li className="mb-3 lg:mb-0 lg:mr-4 xl:mr-8 text-default lg:hover:border-b-2 hover:border-main-orange hover:text-headers-hovers"> <a href="#">Contact</a> </li>
              </ul>
          </div>

          </div>

          <div className="flex items-center lg:mb-1">
              <div className="pr-3 lg:pr-6">

              <div className={`${(menuState == true || imageSlide == true)? "z-[-1]": ""} md:relative`}>
              <img onClick={ () => setCart(!cart)} src={CartImage} alt="icon-cart" className="h-6 cursor-pointer"/>
              <div className="relative">
              <div onClick={ () => setCart(!cart)} className={`absolute cursor-pointer bottom-[13px] left-[10px] md:bottom-3 md:left-3 w-6 h-6 2xl:w-7 2xl:h-7 text-white rounded-[50%] bg-main-orange text-center ${itemsInCart > 0 ? "block": "hidden"} ${(menuState==true || imageSlide == true)?"z-[-1]": ""}`}>{itemsInCart}</div>
              </div>
              <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cart={cart} menuState={menuState} imageSlide={imageSlide}/>
              </div>

              </div>

              <img src={IconUser} alt="icon-user" className="cursor-pointer hover:border-2 h-7 hover:scale-95 border-main-orange rounded-[50%] lg:h-9 2xl:h-10"/>
          </div>    
          
      </nav>    
    )

}

export default Navbar;

    