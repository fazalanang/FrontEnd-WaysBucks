import  "../styles/home.css";
import React, { useState } from "react";
import logo from "../assets/waysbuck logo.png";
import landingPage from "../assets/landing page background.jpg";
import product1 from "../assets/product1.jpeg"
import product2 from "../assets/product2.jpeg"
import product3 from "../assets/product3.jpeg"
import product4 from "../assets/product4.jpeg"
import Login from "../components/login"
import Register from "../components/register"


function Home () {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isModal, setIsModal ] = useState(false)
    return (
        <>
    <body>
        <nav>
            <div class="left">
                <img src={logo} alt="logo" srcset="" />
            </div>
            <div class="right">
            <button class="login" onClick={() => setIsOpen(true)} >Login</button>
            <button class="register" onClick={() => setIsModal(true)} >Register</button>
            </div>
        <Login open={isOpen} onClose={()=> setIsOpen(false)}/>
        <Register open={isModal} onClose={()=> setIsModal(false)}/>
        </nav>
        

        <div class="text">
            <img src={landingPage} alt="" srcset="" />
            <h1>WAYSBUCK</h1>
            <p>Things are changing, but we're still here for you</p>
            <p>We have temporarily closed our in-store cafes, but select
            grocery and drive-thru locations remaining open.
            Waysbucks Drivers is also available</p>
            <p>Let's Order...</p>
        </div>
        <h1 class="textOrder">Let's Order</h1>
        <div class="product">
            <div class="one">
                <img src={product1} alt="" />
                <h3>Ice Coffe Palm Sugar</h3>
                <p>Rp.27.000</p>
            </div>
            <div class="two">
                <img src={product2} alt="" srcset="" />
                <h3>Ice Coffe Green Tea</h3>
                <p>Rp.31.000</p>
            </div>
            <div class="three">
                <img src={product3} alt="" srcset="" />
                <h3>Hanami Latte</h3>
                <p>Rp.29.000</p>
            </div>
            <div class="four">
                <img src={product4} alt="" srcset="" />
                <h3>Clepon Coffe</h3>
                <p>Rp.28.000</p>
            </div>
        </div>
        <h1> </h1>

        </body>
        </>
    )
}

export default Home