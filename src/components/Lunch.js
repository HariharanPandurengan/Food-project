import React from "react";
import "../App.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { foodData } from "../redux/Store";


function Lunch(props) {

    const[searchVal,setSearchVal] = useState('');
    const dispatch = useDispatch();

    return ( 
        <section className="food-whole">
        <div style={{display:"flex",alignItems:"center",marginBottom:"20px",marginLeft:"30px"}}>
            <h2>Snacks</h2>
            <input type="text" placeholder="Search" onChange={(event)=>{setSearchVal(event.target.value)}}/>
        </div>
        <div className="food-list">
        {
            searchVal === '' ? props.items.map((list)=>{
                  return  <div className="food-maxwidth">
                        <img src={list.img} className="food-img" />
                        <h3>{list.name} <small style={{fontSize:"13px",fontWeight:"lighter"}}>{list.price}</small></h3>
                        <button onClick={()=>{
                                    dispatch(foodData(list))
                                 }}>Add to cart</button>
                     </div>
            }) : props.items.filter((item)=>item.name.toLowerCase().includes(searchVal.toLowerCase())).map((list)=>{
                  return  <div className="food-maxwidth">
                        <img src={list.img} className="food-img" />
                        <h3>{list.name} <small style={{fontSize:"13px",fontWeight:"lighter"}}>{list.price}</small></h3>
                        <button onClick={()=>{
                                    dispatch(foodData(list))
                                 }}>Add to cart</button>
                     </div>
            })
         }
         </div>
     </section>
     );
}

export default Lunch;