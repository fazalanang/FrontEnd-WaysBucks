import "./transaction.css"
import logo from "../assets/waysbuck logo.png";
import cart from "../assets/cart.jpeg"
import barcode from "../assets/barcode.jpeg"
import React from "react"

function Transaction ({ open,onClose }){
    if (!open) return null
    return (
        <>
            <div class="profileeLeft" onClick={onClose}>
                <div class="orderrContainer">
                    <div class="orderrContainerLeft">
                        <div class="orderr">
                            <div class="orderrList">
                                <img src={cart}/>
                                <div class="containerrTransaction">
                                    <h3>Ice Coffe Palm Sugar </h3>
                                    <p><b>Saturday</b>, 5 March 2020</p>
                                    <div class="toppiing">
                                        <p><b>Topping</b> : Bill Berry Boba,Buble Tea Gelatin</p>
                                    </div>
                                    <div class="priice">
                                        <p>Price : Rp.33.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="orderr">
                            <div class="orderrList">
                                <img src={cart}/>
                                    <div class="containerrTransaction">
                                        <h3>Ice Coffe Palm Sugar </h3>
                                        <p><b>Saturday</b>, 5 March 2020</p>
                                            <div class="toppiing">
                                                <p><b>Topping</b> : Bill Berry Boba,Manggo</p>
                                            </div>
                                            <div class="priice">
                                                <p>Price : Rp.36.000</p>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="orderrContainerRight">
                        <div class="orderrRight">
                            <img class="logoo" src={logo}/>
                            <img class="barcoode" src={barcode}/>
                            <button>Waiting Approve</button>
                            <p><b>Sub Total : 69.000</b></p>
                        </div> 
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Transaction