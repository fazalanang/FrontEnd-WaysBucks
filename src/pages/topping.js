import "../styles/topping.css"
import { useNavigate } from "react-router-dom";
import toppingjpeg from "../assets/Topping.jpg"
import Navmin from "../components/navbarAdmin";

function Topping () {
    const navigate = useNavigate ()
    const handleNavigateToAdmin = () => {
        navigate ('/admin')
    }
    return (
        <>
            <head>
                <title>Product</title>
            </head>
            <body>
                <Navmin/>
                <div class="product">
                    <div class="productLeft">
                        <h1>Topping</h1>
                        <form>
                            <input type="text" placeholder="Name Topping"/>
                            <input type="number" placeholder="Price"/>
                            <input type="text" placeholder="Photo Topping"/>
                            <div>
                                <button type="submit" onClick={handleNavigateToAdmin}>Add Topping</button>
                            </div>
                        </form>
                    </div>
                    <div class="productRightTopping">
                        <img src={toppingjpeg}/>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Topping