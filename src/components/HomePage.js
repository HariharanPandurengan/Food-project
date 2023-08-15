import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    return ( 
        <section style={{height:"100vh",width:"100%",display:"flex"}} id="homepage">
            <div id="homepageContentDiv" style={{maxWidth:"1400px",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{maxWidth:"700px",width:"100%",marginBottom:"40px"}}>
                    <h2 style={{textDecoration:"none",fontSize:"50px",marginBottom:"10px"}}>Enjoy Your Pizza <br/> In Town</h2>
                    <button style={{backgroundColor:"yellow",boxShadow:"0px 0px",margin:"0",marginTop:"10px"}} onClick={()=>navigate("pizza")}>Order Now</button>
                </div>
                <div style={{maxWidth:"700px",width:"100%"}}>
                    <h3 id="homeInspiration" style={{fontSize:"25px",marginBottom:"20px",color:"white"}}>Inspiration For Your First Order</h3>
                    <div style={{maxWidth:"700px",width:"100%",display:"flex",justifyContent:"space-between"}}>
                        <div style={{width:"30%",textAlign:"center"}}>
                            <Link to="biriyani"><img style={{width:"100%",borderRadius:"50%"}} alt="img" src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"></img></Link>
                            <p style={{color:"white",margin:"0"}}>Biriyani</p>
                        </div>
                        <div style={{width:"30%",textAlign:"center"}}>
                            <Link to="pizza"><img style={{width:"100%",borderRadius:"50%"}} alt="img" src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"></img></Link>
                            <p style={{color:"white",margin:"0"}}>Pizza</p>
                        </div>
                        <div style={{width:"30%",textAlign:"center"}}>
                            <Link to="burger"><img alt="img" src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" style={{width:"100%",borderRadius:"50%"}}></img></Link>
                            <p id="homePageBurger" style={{color:"white",margin:"0"}}>Burger</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="homepageEmptyDiv">

            </div>
        </section>
     );
}

export default HomePage;