import React from "react"

const styles = {
    backgroundPopUp: {
        width: '100%',
        height: '150%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '1000',
    },
    containerPopUp:{
        position: 'absolute',
        width: '869px',
        height: '153px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        border: 'none',
        marginTop: '320px',
        marginLeft: '320px'
    },
    textPopUp : {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '27px',
        lineHeight: '33px',
        paddingTop: '30px',
        paddingLeft: '60px',
        color: '#469F74',
    }

}

function PopUp ({ open,onClose }){
    if (!open) return null

    return (
        <>
        <div style={styles.backgroundPopUp} onClick={onClose}>
            <div style={styles.containerPopUp}>
            <p style={styles.textPopUp}>Thank you for ordering in us, please wait to verify you order</p>
            </div>
        </div>
        </>
    )
}

export default PopUp