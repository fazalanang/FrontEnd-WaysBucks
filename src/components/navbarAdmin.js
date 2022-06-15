import "./navbarAdmin.css"
import { useNavigate } from "react-router-dom";
import logo from "../assets/waysbuck logo.png";
import logoLogout from "../assets/logo logout.jpeg"
import profileJpg from "../assets/profile.jpeg"
import logoProduct from "../assets/logo product.jpeg"
import logoTopping from "../assets/logo toping.jpeg"

function Navmin () {
    const navigate = useNavigate ()
    const handleNavigateToHome = () => {
        navigate ('/')
    }
    const handleNavigateToAdmin = () => {
        navigate ('/admin')
    }
    const handleNavigateToProduct = () => {
        navigate ('/product')
    }
    const handleNavigateToTopping = () => {
        navigate ('/topping')
    }
    return (
        <>
            <head>
            </head>
            <body>
                <nav>
                    <div class="left">
                    <img src={logo} onClick={handleNavigateToAdmin}/>
                    </div>
                    <div class="right">
                            <ul>
                                <li class="dropdown"><img class="dropbtn" src={profileJpg}/>
                                    <div class="dropdown-contentAdmin">
                                        <div class="dropdownContentAdmin">
                                            <img src={logoProduct}/>
                                            <div class="menuText">
                                            <a onClick={handleNavigateToProduct}>Add Product</a>
                                            </div>
                                        </div>
                                        <div class="dropdownContentAdmin">
                                            <img src={logoTopping}/>
                                            <div class="menuText">
                                            <a onClick={handleNavigateToTopping}>Add Topping</a>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="dropdownContentAdmin">
                                            <img src={logoLogout} class="logoutAdmin"/>
                                            <div class="menuText">
                                            <a onClick={handleNavigateToHome} class="aAdmin">Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </nav>
            </body>
        </>
    )
}

export default Navmin