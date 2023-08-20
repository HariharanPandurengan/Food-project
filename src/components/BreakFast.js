import React from "react";
import "../App.css"
import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { foodData } from "../redux/Store";


function BreakFast(props) {

    const[searchVal,setSearchVal] = useState('');
    const cart = useSelector((state)=>state.user.value);
    const dispatch = useDispatch();

    return ( 
        <section className="food-whole">
            <div style={{display:"flex",alignItems:"center",marginBottom:"20px"}} id="breakfast1Div">
                <h2 id="breakfastHeading">Biriyani</h2>
                <input type="text" placeholder="Search" onChange={(event)=>{setSearchVal(event.target.value)}}/>
            </div>
            <div className="food-list">
            {
                searchVal === '' ? props.items.map((list)=>{
                    return  <div className="food-maxwidth">
                            <img src={list.img} alt="img" className="food-img" />
                            <h3>{list.name} <small style={{fontSize:"13px",fontWeight:"lighter"}}>{list.price}</small></h3>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
                            {
                                cart.map(a=>{
                                    if(a.name === list.name)
                                    {
                                    return <p style={{marginRight:"10px"}}>Added : {a.count}</p>
                                    }
                                    
                                })
                            }
                        {
                            cart.map(a=>{
                                if(list.name.includes(a.name))
                                {
                                if(a.count !== 0)
                                {
                                    return <button onClick={()=>{
                                        dispatch(foodData(list))
                                    }}>Add Another One</button>
                                }
                                }
                            }) 
                        }
                        {
                            ((!cart.some(item => item.name === list.name) && cart.length !== 0) || cart.length === 0 ) &&
                                <button onClick={() => {
                                dispatch(foodData(list));
                                console.log(list)
                                }}>Add to cart</button>
                            }
                            </div>         
                        </div>
                }) : props.items.filter((item)=>item.name.toLowerCase().includes(searchVal.toLowerCase())).map((list)=>{
                    return  <div className="food-maxwidth">
                                <img src={list.img} alt="img" className="food-img" />
                                <h3>{list.name} <small style={{fontSize:"13px",fontWeight:"lighter"}}>{list.price}</small></h3>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
                            {
                                cart.map(a=>{
                                    if(a.name === list.name)
                                    {
                                    return <p style={{marginRight:"10px"}}>Added : {a.count}</p>
                                    }
                                    
                                })
                            }
                        {
                            cart.map(a=>{
                                if(list.name.includes(a.name))
                                {
                                if(a.count !== 0)
                                {
                                    return <button onClick={()=>{
                                        dispatch(foodData(list))
                                    }}>Add Another One</button>
                                }
                                }
                            }) 
                        }
                        {
                            ((!cart.some(item => item.name === list.name) && cart.length !== 0) || cart.length === 0 ) &&
                                <button onClick={() => {
                                dispatch(foodData(list));
                                console.log(list)
                                }}>Add to cart</button>
                            }
                            </div>         
                            </div>
                })
            }
            </div>
         </section>
     );
}

export default BreakFast;