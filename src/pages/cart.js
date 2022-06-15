import "../styles/cart.css";
import cartjpg from "../assets/cart.jpeg"
import trashLogo from "../assets/Trash logo.jpeg"
import transaction from "../assets/TRANSCTION.jpeg"
import Navbar from "../components/navbar";
import React, { useState } from "react";
import PopUp from "../components/popUp";

function Cart () {
    const [ isPopUp, setIsPopUp ] = useState(false)
    return (
        <>
            <head>
                <title>Detail Product</title>
            </head>
            <body>
                <PopUp open={isPopUp} onClose={()=> setIsPopUp(false)}/>
                <Navbar/>
                <div class="containerCart">
                    <div class="cartLeft">
                        <h1>My Cart</h1>
                        <p>Review Your Order</p>
                        <hr/>
                        <div class="order">
                            <div class="orderLeft">
                                <img src={cartjpg}/>
                                <div class="drink">
                                    <h3>Ice Coffe Palm Sugar </h3>
                                    <div class="toppingBoba">
                                        <h4>Topping</h4>
                                        <p> : Bill Berry Boba, Bubble Tea Gelatin</p>
                                    </div>
                                </div>
                            </div>
                            <div class="orderRight">
                                <p>Rp.33.000</p>
                                <img src={trashLogo}/>
                            </div>
                        </div>
                        <div class="order">
                            <div class="orderLeft">
                                <img src={cartjpg}/>
                                <div class="drink">
                                    <h3>Ice Coffe Palm Sugar </h3>
                                    <div class="toppingBoba">
                                        <h4>Topping</h4>
                                        <p> : Bill Berry Boba, Manggo</p>
                                    </div>
                                </div>
                            </div>
                            <div class="orderRight">
                                <p>Rp.36.000</p>
                                <img src={trashLogo}/>
                            </div>
                        </div>
                        <hr/>
                        <div class="transaction">
                        <div class="transactionLeft">
                        <hr/>
                        <div class="total">
                            <div class="textCart">
                                <p>Subtotal</p>
                                <p>Qty</p>
                            </div>
                            <div class="number">
                                <p>Rp.69.000</p>
                                <p>2</p>
                            </div>
                        </div>
                        <div class="line">
                            <hr/>
                        </div>
                        <div class="total">
                            <div class="textCart">
                                <p>Total</p>
                            </div>
                            <div class="number">
                                <p>Rp.69.000</p>
                            </div>
                        </div>
                        </div>
                        <div class="transactionRight">
                            <button><img src={transaction}/>Attache of Transaction</button>
                        </div>
                        </div>
                    </div>
                    <div class="cartRight">
                        <form>
                                <input id="input-name" type="text" placeholder="Name"/>

                                <input id="input-email" type="email" placeholder="Email"/>

                                <input id="input-Phone" type="number" placeholder="Phone"/>

                                <input id="input-code" type="number" placeholder="Pos Code"/>

                                <textarea id="input-addres" placeholder="Addres"></textarea>

                            <div>
                                <button type="button" onClick={() => setIsPopUp(true)} >Pay</button>
                            </div>
            
                        </form>
                    </div>
                </div>
            </body>
        
        </>
    )
}

export default Cart