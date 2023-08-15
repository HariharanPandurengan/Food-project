import React from "react";
import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css"
import cart from "../img/cart.png"

function Navbar() {
    
    const navigate = useNavigate();
    const cartCount = useSelector((state)=>state.user.count);

    return ( 
       <div id="nav-whole" style={{position:"sticky",top:"0px"}}>
            <div className="nav-maxwidth">
                <div>
                    <h1 id="nav-title">Food Court</h1>
                </div>
                <div id="nav2div">
                    <ul id="navbar">
                        <li className="nav-li"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-li"><Link className="nav-link" to="menu">Menu</Link></li>
                        <li className="nav-li"><Link className="nav-link" to="snacks">Snacks</Link></li>
                        <li className="nav-li"><Link className="nav-link" to="lunch">Lunch</Link></li>
                        <li className="nav-li"><Link className="nav-link" to="breakfast">Breakfast</Link></li>
                    </ul>
                    <div id="cartimgsection" style={{display:"flex",alignItems:"center",maxWidth:"50px",width:"100%"}}>
                        <img src={cart} alt="img" width="43%" height="10%" onClick={()=>navigate("cart")}/>
                        <p>{cartCount}</p>
                    </div>
                </div>
            </div>
       </div>
     );
}

export default Navbar;