import React, {useState} from "react";
import {data} from "../pages/detailProduct";
import allow from "../assets/allow.jpeg"

const styles = {
    imgCheked: {
        width: '25px',
        height: '25px',
        marginBottom: '120px',
        marginTop: '0px',
        marginLeft: '0px',
        position: 'absolute',
        zIndex: '1000',
    },
    toppingCheked: {
        width: '85px',
        height: '90px',
        marginLeft: '10px',
        display:'flex',
        position: 'inlineFlex'
    },
}


const Ceklis = ({name, id,}) => {
    const [cheked, setCheked] = useState(false);

    const handleCheked = ( ) => {
        setCheked ( ! cheked )

        data.find ( item => item.id === id ).cheked = !cheked;
        }

        return (

            <div onClick={ handleCheked}>
                <img src={data.img} style={styles.toppingCheked} name={name}/>
                { cheked && <img style={styles.imgCheked} src={allow}/>}
            </div>

        )

}

export default Ceklis