import  "./navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/waysbuck logo.png";
import logoLogout from "../assets/logo logout.jpeg"
import logoProfile from "../assets/logo profile.jpeg"
import profilePicture from "../assets/profile.jpeg"
import shopping from "../assets/shopping basket.jpeg"

function Navbar () {
    const navigate = useNavigate ()
    const handleNavigateToHome = () => {
        navigate ('/')
    }
    const handleNavigateToProfile = () => {
        navigate ('/profile')
    }
    const handleNavigateToHome2 = () => {
        navigate ('/home')
    }
    const handleNavigateToCart = () => {
        navigate ('/cart')
    }
    return (
        <>
        <head>
        <title>Home</title>
    </head>
    <body>
        <nav>
            <div class="left">
                    <img src={logo} onClick={handleNavigateToHome2}/>
            </div>
            <div class="right">
                <img class="shopping" src={shopping} onClick={handleNavigateToCart}/>
                    <ul>
                        <li class="dropdown"><img class="dropbtn" src={profilePicture}/>
                            <div class="dropdown-content">
                                <div class="dropdownContent">
                                    <img src={logoProfile}/>
                                    <div class="menuText">
                                    <a onClick={handleNavigateToProfile}>Profile</a>
                                    </div>
                                </div>
                                <hr/>
                                <div class="dropdownContent">
                                    <img src={logoLogout}/>
                                    <div class="menuText">
                                    <a onClick={handleNavigateToHome}>Logout</a>
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

export default Navbar