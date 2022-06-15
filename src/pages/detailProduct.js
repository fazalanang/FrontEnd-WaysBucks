import  "../styles/detailProduct.css";
import detailProduct from "../assets/detail product.jpeg";
import topping1 from "../assets/topping1.jpg";
import topping2 from "../assets/topping2.jpg";
import topping3 from "../assets/topping3.jpg";
import topping4 from "../assets/topping4.jpg";
import topping5 from "../assets/topping5.jpeg";
import topping6 from "../assets/topping6.jpeg";
import topping7 from "../assets/topping7.jpeg";
import topping8 from "../assets/topping8.jpeg";
import Navbar from "../components/navbar";
import Ceklis from "../components/ceklis";

    export const data = [
        {
            id: 1,
            name: 'Bubble Tea Gelatin',
            img: require ('../assets/topping1.jpg'),
            price: 3.000
        },
        {
            id: 1,
            name: 'Bubble Tea Gelatin',
            img: require ('../assets/topping1.jpg'),
            price: 3.000
        },

    ];

function DetailProduct () {

    const handleClick = ( ) => {
        const dataPerson = data.filter (person => person.Cheked === true)

        console.log (dataPerson)
    }
    return (
        <>
         <head>
            <title>Detail Product</title>
           </head>
            <body>
                <Navbar/>
                <div class="contentDetail">
                    <div class="contentLeft">
                        <img src={detailProduct}/>
                    </div>
                    <div class="contentRight">
                        <div class="textDetail">
                            <h1>Ice Coffee Palm Sugar</h1>
                            <p>Rp.27.000</p>
                        </div>
                        <h5>Topping</h5>
                        <div class="topping">
                                <div class="lineOne">
                                    <div class="one">
                                            {data.map( (item) => {
                                                return (
                                                    <div key={item.id}>
                                                            <Ceklis name={item.name} id={item.id}/>
                                                            <p>Bubble Tea Gelatin</p>
                                                    </div>
                                                    )
                                                })}
                                    </div>
                                    <div class="two">
                                    <img src={topping2}/>
                                    <p>Manggo</p>
                                    </div>
                                    <div class="three">
                                        <img src={topping3}/>
                                        <p>Green Coconut</p>
                                    </div>
                                    <div class="four">
                                        <img src={topping4}/>
                                        <p>Boba Manggo</p>
                                    </div> 
                                </div>
                                <div class="lineTwo">
                                    <div class="five">
                                        <img src={topping5}/>
                                        <p>Bill Berry Boba</p>
                                    </div>
                                    <div class="six">
                                        <img src={topping6}/>
                                        <p>Kiwi Popping Pearl</p>
                                    </div>
                                    <div class="seven">
                                        <img src={topping7}/>
                                        <p>Matcha Cantaloupe</p>
                                    </div>
                                    <div class="eight">
                                        <img src={topping8} alt=''/>
                                        <p>Strawberry Popping</p>
                                    </div>
                                </div>
                        </div>
                        <div class="priceDetail">
                            <h3>Total</h3>
                            <div class="no">
                            <h3>Rp.27.000</h3>
                            </div>
                        </div>
                        <button class= "detailBtn" onClick={handleClick}>Add Cart</button>
                    </div>
                </div>
            </body>
        </>
    );
}

export default DetailProduct