import { React, useState } from "react";
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";

import imageProduct1 from "../images/image-product-1.jpg";
import imageProduct2 from "../images/image-product-2.jpg";
import imageProduct3 from "../images/image-product-3.jpg";
import imageProduct4 from "../images/image-product-4.jpg";

import imageThumbanil1 from "../images/image-product-1-thumbnail.jpg";
import imageThumbanil2 from "../images/image-product-2-thumbnail.jpg";
import imageThumbanil3 from "../images/image-product-3-thumbnail.jpg";
import imageThumbanil4 from "../images/image-product-4-thumbnail.jpg";

function ContentContainer( {menuState, itemsInCart, image, setImage, setItemsInCart, imageSlide, setImageSlide} ){
    const [currentNumberToAdd, setCurrentNumberToAdd] = useState(0);

    const minus = "-";
    const plus = "+";

    let width = window.innerWidth;

    function currentDimensions(){
        width = window.innerWidth;
    }

    window.addEventListener("resize", currentDimensions);

    function changeImage(mode){
        if(mode === "-"){
            if(image === 1){
                setImage(4);
            } else{
                setImage(image - 1);
            }
        } else {
            if(image === 4){
                setImage(1);
            } else setImage(image + 1);
        }
    }

    function minusNumberToAdd(){
        if(currentNumberToAdd > 0){
            setCurrentNumberToAdd(currentNumberToAdd - 1);
        }
    }

    return(
       <section className="flex flex-col md:grid-cols-2 md:grid md:px-[10%] md:gap-10 md:mt-[3vh]">
         <div className={`relative flex items-center justify-between w-full ${(menuState === true || imageSlide === true) ? "z-[-10]": ""} md:items-start lg:pt-[9vh] md:pt-[5vh] lg:mt-[-7vh] `}>
             <div onClick={() => changeImage(minus)}  className="bg-white flex items-center rounded-[50%] absolute left-[5%] p-2 justify-center hover:cursor-pointer md:hidden sm:left-[12%]">
             <img src={iconPrevious} alt="icon-previous" className="w-3 h-3 aspect-[1/1] max-w-[36px] mr-[2.5px]"/>
             </div>
        
            <div className="sm:px-[7%] md:px-[-7%] md:pt-[3%]">
            <img onClick={ ()=>{if(width >= 900) setImageSlide(true)}} src={imageProduct1} alt="product-1" className={`aspect-[4/3] ${(image === 1)? "block": "hidden"} md:rounded-md  md:cursor-pointer`}/>
            <img onClick={ ()=>{if(width >= 900) setImageSlide(true)}} src={imageProduct2} alt="product-2" className={`aspect-[4/3] ${(image === 2)? "block": "hidden"} md:rounded-md  md:cursor-pointer`}/>
            <img onClick={ ()=>{if(width >= 900) setImageSlide(true)}} src={imageProduct3} alt="product-3" className={`aspect-[4/3] ${(image === 3)? "block": "hidden"} md:rounded-md  md:cursor-pointer`}/>
            <img onClick={ ()=>{if(width >= 900) setImageSlide(true)}} src={imageProduct4} alt="product-4" className={`aspect-[4/3] ${(image === 4)? "block": "hidden"} md:rounded-md  md:cursor-pointer`}/>

            <div className="hidden md:flex md:justify-between md:mt-[3vh]">
               <div className={`${image===1?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${image==1?"absolute bg-gray-400 opacity-40": ""}`}> 
               <img onClick={ () =>{ setImage(1)}} src={imageThumbanil1} alt="thumbnail-product-1" className="rounded-md  aspect-[8/7] md:hover:cursor-pointer"/>
               </span></div>

               <div className={`${image===2?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${image==2?"absolute bg-gray-400 opacity-40": ""}`}> 
               <img onClick={ () =>{ setImage(2)}} src={imageThumbanil2} alt="thumbnail-product-2" className="rounded-md aspect-[8/7] md:hover:cursor-pointer"/>
               </span></div>

               <div className={`${image===3?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${image==3?"absolute bg-gray-400 opacity-40": ""}`}> 
               <img onClick={ () =>{ setImage(3)}} src={imageThumbanil3} alt="thumbnail-product-3" className="rounded-md aspect-[8/7] md:hover:cursor-pointer"/>
               </span></div>

               <div className={`${image===4?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${image==4?"absolute bg-gray-400  opacity-40": ""}`}> 
               <img onClick={ () =>{ setImage(4)}} src={imageThumbanil4} alt="thumbnail-product-4" className="rounded-md aspect-[8/7] md:hover:cursor-pointer"/>
               </span></div>
                
            </div>
            </div>

            <div onClick={() => changeImage(plus)} className="bg-white flex items-center rounded-[50%] absolute right-[5%] p-2 justify-center hover:cursor-pointer md:hidden sm:right-[12%]">
            <img src={iconNext}  alt="icon-next" className="w-3 h-3 aspect-[1/1] max-w-[36px] ml-[2.5px] "/>
            </div>
         </div>

         <div className={`py-[5%] px-[7%] md:pt-[5vh] ${(imageSlide || menuState)? "z-[-10]": "z-0"}`}>
            <p className="text-[10px] font-[515] text-main-orange tracking-widest md:text-sm">SNEAKER COMPANY</p>

            <h1 className="mt-2 text-2xl font-bold text-headers-hovers md:text-3xl md:mt-4">
            <p>Fall Limited Edition</p> 
            <p>Sneakers</p>
            </h1>

            <p className="mt-2 text-default md:text-xl md:mt-6">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <div className="flex items-center justify-between mt-3 md:mt-6">
                <div className="flex items-center">
                <span className="text-2xl font-bold text-headers-hovers">$125.00</span>
                <span className="text-main-orange font-[505] ml-8 bg-second-orange">50%</span>
                </div>
                <span className="font-[505] line-through text-default">$250.00</span>
            </div>

            <div className="md:flex md:mt-6">
            <div className="flex items-center justify-between py-2 mt-6 bg-gray-200 rounded-l-[12px] rounded-r-[12px] md:w-[45%] md:py-3 md:mr-4 min-w-[115px]">
                <p className="ml-5 rounded-l-md hover:cursor-pointer">
                    <img onClick={ () => minusNumberToAdd()} src={iconMinus} alt="minus" />
                </p>

                <p>
                    {currentNumberToAdd}
                </p>

                <p className="mr-5 rounded-r-md hover:cursor-pointer">
                    <img onClick={ () => setCurrentNumberToAdd(currentNumberToAdd + 1)} src={iconPlus} alt="plus" />
                </p>
            </div>

            <button onClick={ () => setItemsInCart(itemsInCart + currentNumberToAdd)} type="button" className="flex items-center justify-center w-full py-4 mt-4 font-semibold text-white rounded-md bg-main-orange md:mt-6 md:hover:bg-orange-300">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero" className="fill-white"/></svg>

            <p className="ml-3">Add to cart</p>
            </button>
            </div>
         </div>
       </section>
    )
}

export default ContentContainer;
