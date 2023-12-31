import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../App.css"
import { clearCart, minusItem, plusItem } from "../redux/Store";
import { useNavigate } from "react-router-dom";


function Cart() {

    const cart = useSelector((state)=>state.user.value);   
    const tp = useSelector((state)=>state.user.tp);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return ( 
        <section id="cart">
            <h2 style={{paddingTop:"70px"}}>CART</h2>
            <div id="cart-maxwidth">
                {
                    cart.map((list)=>{
                        
                        return  <div id="cart-display">
                                  <img src={list.img} alt="img" id="cart-img" style={{width:"100%",marginTop:"2px"}} />
                                  <h3 style={{margin:"2px"}}>{list.name}</h3>
                                  <p style={{margin:"2px"}}>{list.price}</p>
                                  <p style={{marginTop:"4px",marginBottom:"0"}}>Quantity : {list.count}</p>
                                  <div id="cartPlusMinusButtonDiv">
                                    <button id="cartPlusButton" className="cartPlusMinusButtons" onClick={()=>dispatch(plusItem(list.name))}>+</button>
                                    <button id="cartMinusButton" className="cartPlusMinusButtons" onClick={()=>dispatch(minusItem(list.name))}>-</button>
                                  </div>
                                </div>    
                    })
                }       
            </div>
            {
                cart.length === 0 && 
                <h3>Cart Is Empty 😕</h3>
            }
            {cart.length !== 0 &&
                 <>
                    <div>Total Amount To Pay : {tp} Rs</div>
                    <div style={{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"20px"}}>
                         <button onClick={()=>{
                            navigate("/pp")
                            dispatch(clearCart())
                            }}>Order</button>
                         <button id="cartCancel" onClick={()=>dispatch(clearCart())}>Cancel</button>
                     </div>
                </>
            }
        </section>
     );
}

export default Cart;