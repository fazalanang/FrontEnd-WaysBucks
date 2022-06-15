import "../styles/product.css"
import { useNavigate } from "react-router-dom";
import productjpeg from "../assets/product.jpeg"
import Navmin from "../components/navbarAdmin";

function Product () {
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
                        <h1>Product</h1>
                        <form>
                            <input type="text" placeholder="Name Product"/>
                            <input type="number" placeholder="Price"/>
                            <input type="text" placeholder="Photo Product"/>
                            <div>
                                <button type="submit" onClick={handleNavigateToAdmin}>Add Product</button>
                            </div>
                        </form>
                    </div>
                    <div class="productRight">
                        <img src={productjpeg}/>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Product