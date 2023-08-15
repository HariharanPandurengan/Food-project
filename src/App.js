import React, { useEffect } from "react"
import './App.css';
import Home from "./components/Home";
import {Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux/Store";
import Lunch from "./components/Lunch";
import BreakFast from "./components/BreakFast";
import Snacks from "./components/Snacks";
import Navbar from "./components/Navbar";
import Pizz from './img/Imgs/pizza.jpg'
import Pongal from './img/Imgs/pongal.jpg'
import Burge from './img/Imgs/burger.jpeg'
import Vada from './img/Imgs/vada.jpg'
import Biriyan from './img/Imgs/biriyani.jpg'
import BreadOmlete from './img/Imgs/bread-omlete.jpg'
import Sandwich from './img/Imgs/sandwich.jpeg'
import Vegmeals from './img/Imgs/veg-meals.jpg'
import Cart from "./components/Cart";
import Or from "./components/Or";
import HomePage from "./components/HomePage";
import Pizza from "./components/Pizza";
import Biriyani from "./components/Biriyani";
import Burger from "./components/Burger";

function App() {
  
  useEffect(()=>{
    document.title = "Food_App"
  })

  const Items = [
  {
    name:"Veg Pizza",
    price:"150Rs",
    img:Pizz,
    amount:150,
    type:"breakfast",
    varientName:"pizza",
    count:1
  },
  {
    name:"Chicken Pizza",
    price:"200Rs",
    img:"https://www.jessicagavin.com/wp-content/uploads/2022/02/buffalo-chicken-pizza-16-1200.jpg",
    amount:200,
    type:"breakfast",
    varientName:"pizza",
    count:1
  },
  {
    name:"Pongal",
    price:"70Rs",
    img:Pongal,
    amount:70,
    type:"breakfast",
    count:1
  },
  {
    name:"Vada",
    price:"20Rs",
    img:Vada,
    amount:20,
    type:"breakfast",
    count:1
  },
  {
    name:"Chicken Buruger",
    price:"200Rs",
    img:Burge,
    amount:200,
    type:"snacks",
    varientName:"burger",
    count:1
  },
  {
    name:"Veg Buruger",
    price:"100Rs",
    img:"https://www.simplyrecipes.com/thmb/3U4cicJECcEitIruZZXh3UgbYbQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__05__Green-Goddess-Burgers-LEAD-1-e6ee44858eea4d2590a058f8fa66f5e0.jpg",
    amount:100,
    type:"snacks",
    varientName:"burger",
    count:1
  },
  {
    name:"Chicken Biriyani",
    price:"250Rs",
    img:Biriyan,
    amount:250,
    type:"lunch",
    varientName:"biriyani",
    count:1
  },
  {
    name:"Egg Biriyani",
    price:"200Rs",
    img:"https://www.archanaskitchen.com/images/archanaskitchen/Indian_Rice/Egg_Biryani_Recipe_With_Coconut_Milk-1.jpg",
    amount:200,
    type:"lunch",
    varientName:"biriyani",
    count:1
  },
  {
    name:"Veg Biriyani",
    price:"150Rs",
    img:"https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=",
    amount:150,
    type:"lunch",
    varientName:"biriyani",
    count:1
  },
  {
    name:"Veg Meals",
    price:"200Rs",
    img:Vegmeals,
    amount:200,
    type:"lunch",
    count:1
  },
  {
    name:"Bread Omlete",
    price:"150Rs",
    img:BreadOmlete,
    amount:150,
    type:"snacks",
    count:1
  },
  {
    name:"Sandwich",
    price:"120Rs",
    img:Sandwich,
    amount:120,
    type:"snacks",
    count:1
  }]

     let S = Items.filter((list)=>
        list.type==="snacks"
      ).map((d)=>{
       return d
       
     })
  
     let L = Items.filter((list)=>
       list.type==="lunch"
     ).map((d)=>{
      return d
     })
  
      let B = Items.filter((list)=>
       list.type==="breakfast"
      ).map((d)=>{
        return d
      })

      let VBiriyani = Items.filter((list)=>
        list.varientName === "biriyani"
      ).map((list)=>{
        return list
      })

      console.log(VBiriyani)

      let VPizza = Items.filter((list)=>
        list.varientName === "pizza"
      ).map((list)=>{
        return list
      })

      let VBurger = Items.filter((list)=>
        list.varientName === "burger"
      ).map((list)=>{
        return list
      })

  return (
    <div className="App">
       <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="menu" element={<Home items = {Items}></Home>}></Route>
            <Route path="snacks" element={<Snacks items = {S}></Snacks>}></Route>
            <Route path="breakfast" element={<BreakFast items = {B}></BreakFast>}></Route>
            <Route path="lunch" element={<Lunch items = {L}></Lunch>}></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
            <Route path="/pp" element={<Or></Or>}></Route>
            <Route path="biriyani" element={<Biriyani items = {VBiriyani}></Biriyani>}></Route>
            <Route path="pizza" element={<Pizza items = {VPizza}></Pizza>}></Route>
            <Route path="burger" element={<Burger items = {VBurger}></Burger>}></Route>
          </Routes>
        </Provider>
    </div>
  );
}

export default App;
