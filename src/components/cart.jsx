import React,{useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { blueGrey } from '@mui/material/colors';

function Cart(props){
    const [mouseOver, setMouseOver] = useState(false);

    function handleMouseOver(){
        return setMouseOver(prevValue =>{
            return !prevValue;
        })
    }

return <div className="cartItem" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>

        <div className="imgBox">
            <img alt="product" src={props.ImageURL}></img>
        </div>
        <div className="cartTitle"><h4>{props.Title}</h4></div>
        <div><p>{props.PriceTag}Rs</p>
        <span>Qty: {props.Qty}</span></div>
        <div style={{opacity: mouseOver? "1":"0"}}>
        <button className="deleteItem" onClick={()=> props.onDelete(props.id)}><DeleteIcon sx={{ color: blueGrey[50] }} /></button>
        </div>
    </div>
}

export default Cart;