import React from "react";
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Total(props){
    return <div className="total-container">
            <div className="total-contents">
                <div className="price-container" style={{color:"#fff"}}>
                    <p>Total</p>
                    <h3>{props.Total}Rs</h3>
                </div>
                <div><Button onClick={props.onCheckout} style={{backgroundColor:"#64dd17"}} variant="contained" endIcon={<ShoppingCartCheckoutIcon />}>
        Checkout
      </Button></div>
            </div>
    </div>
}

export default Total;