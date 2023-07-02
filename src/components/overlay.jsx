import React from "react";


function Overlay(props){

    return <div className={props.onCheckout ? "overlay":"overlay-none"}></div>
}

export default Overlay;