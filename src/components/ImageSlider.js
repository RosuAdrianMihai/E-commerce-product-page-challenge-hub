import React from "react";

import imageProduct1 from "../images/image-product-1.jpg";
import imageProduct2 from "../images/image-product-2.jpg";
import imageProduct3 from "../images/image-product-3.jpg";
import imageProduct4 from "../images/image-product-4.jpg";

import imageThumbanil1 from "../images/image-product-1-thumbnail.jpg";
import imageThumbanil2 from "../images/image-product-2-thumbnail.jpg";
import imageThumbanil3 from "../images/image-product-3-thumbnail.jpg";
import imageThumbanil4 from "../images/image-product-4-thumbnail.jpg";

function ImageSlider( { copyImage, setCopyImage, imageSlide, setImageSlide } ){
    const mainImagesSource = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

    const previous = () => {
        if(copyImage === 1){
            setCopyImage(4);
        } else setCopyImage(copyImage - 1);
    }

    const next = () => {
        if(copyImage === 4){
            setCopyImage(1);
        } else setCopyImage(copyImage + 1);
    }

    return(
        <div className={`w-[606px] mx-auto relative md:mt-[-68vh] 2xl:mt-[-70vh] ${imageSlide === false?"hidden": ""}`}>
           <div onClick={ () => setImageSlide(false)} className="flex justify-end cursor-pointer mr-[55px] mb-4">
           <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" className="hover:fill-orange-500" /></svg>
           </div>

           <div className="relative flex items-center justify-center">
           <div onClick={previous} className="p-5 bg-white rounded-[50%] cursor-pointer left-[3.5%] absolute">
           <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
           </div>

           <img src={mainImagesSource[copyImage-1]} alt="main-image" className="aspect-ratio-[5/7] h-[500px] rounded-md"/>

           <div onClick={next} className="p-5 bg-white rounded-[50%] cursor-pointer right-[3.5%] absolute">
           <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
           </div>
           </div>

           <div className="hidden md:flex md:justify-between md:mt-[3vh] w-[70%] mx-auto">
           <div className={`${copyImage===1?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${copyImage===1?"absolute bg-gray-400": ""}`}> 
               <img onClick={ () => setCopyImage(1)} src={imageThumbanil1} alt="thumbnail-product-1" className={`rounded-md aspect-square md:hover:cursor-pointer ${copyImage===1? "opacity-40": ""}`}/>
               </span></div>

               <div className={`${copyImage===2?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${copyImage===2?"absolute bg-gray-400": ""}`}> 
               <img onClick={ () => setCopyImage(2)} src={imageThumbanil2} alt="thumbnail-product-2" className={`rounded-md aspect-square md:hover:cursor-pointer ${copyImage===2? "opacity-40": ""}`}/>
               </span></div>

               <div className={`${copyImage===3?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${copyImage===3?"absolute bg-gray-400": ""}`}> 
               <img onClick={ () => setCopyImage(3)} src={imageThumbanil3} alt="thumbnail-product-3" className={`rounded-md aspect-square md:hover:cursor-pointer ${copyImage===3? "opacity-40": ""}`}/>
               </span></div>

               <div className={`${copyImage===4?"relative border-2 border-main-orange": ""} w-[17%] rounded-md`}><span className={`${copyImage===4?"absolute bg-gray-400  ": ""}`}> 
               <img onClick={ () => setCopyImage(4)} src={imageThumbanil4} alt="thumbnail-product-4" className={`rounded-md aspect-square md:hover:cursor-pointer ${copyImage===4? "opacity-40": ""} `}/>
               </span></div>
           </div>
        </div>
    )
}

export default ImageSlider;