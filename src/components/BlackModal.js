import React from "react";

function BlackModal( { menuState, setMenuStatus, imageSlide } ){
    if(menuState === true || imageSlide === true){
        return(
            <div onClick={ () => setMenuStatus(false)} className="fixed block w-full h-[100vh] bg-black opacity-75"></div>
        )
    } else{
        return(
            <div className="fixed hidden w-[100vw] h-[100vh] bg-black opacity-75"></div>
        )
    }
}

export default BlackModal;