import "../styles/profile.css"
import logo from "../assets/waysbuck logo.png";
import profileJpg from "../assets/profile.jpeg"
import cart from "../assets/cart.jpeg"
import barcode from "../assets/barcode.jpeg"
import Navbar from "../components/navbar";

function Profile () {
    return (
        <>
            <head>
                <title>Profile</title>
            </head>
            <body>
                <Navbar/>
                <div class="profile">
                    <div class="profileRight">
                        <div class="profileContainerRight">
                            <h1>My Profile</h1>
                            <img src={profileJpg}/>
                        </div>
                        <div class="profileContainerLeft">
                                <h5>Full Name</h5>
                                <p>Egi Ganteng</p>
                                <h5>Email</h5>
                                <p>egigans@gmail.com</p>
                        </div>
                    </div>
                    <div class="profileLeft">
                        <h1>My Transaction</h1>
                        <div class="orderContainer">
                            <div class="orderContainerLeft">
                                <div class="order">
                                    <div class="orderList">
                                        <img src={cart}/>
                                            <div class="containerTransaction">
                                                <h3>Ice Coffe Palm Sugar </h3>
                                                <p><b>Saturday</b>, 5 March 2020</p>
                                                <div class="topping">
                                                    <p><b>Topping</b> : Bill Berry Boba,Buble Tea Gelatin</p>
                                                </div>
                                                <div class="price">
                                                    <p>Price : Rp.33.000</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div class="order">
                                    <div class="orderList">
                                        <img src={cart}/>
                                            <div class="containerTransaction">
                                                <h3>Ice Coffe Palm Sugar </h3>
                                                <p><b>Saturday</b>, 5 March 2020</p>
                                                <div class="topping">
                                                    <p><b>Topping</b> : Bill Berry Boba,Manggo</p>
                                                </div>
                                                <div class="price">
                                                    <p>Price : Rp.36.000</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="orderContainerRight">
                                <div class="orderRight">
                                    <img class="logo" src={logo}/>
                                    <img class="barcode" src={barcode}/>
                                    <button>On The Way</button>
                                    <p><b>Sub Total : 69.000</b></p>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}

export default Profile