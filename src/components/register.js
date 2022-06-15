import "./register.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";

function Register ({ open,onClose }) {
    const navigate = useNavigate ()
    const handleNavigateToHome2 = () => {
        navigate ('/home')
    }
    if (!open) return null
    return (
        <>
        <div class="backgroundContainer" onClick={onClose}>
            <div class="containerRegister">
                <h1>Register</h1>
                <form>
                        <input placeholder="Email" type="text" onClick={open}/>
                        <input placeholder="Password" type="password" onClick={open}/>
                        <input placeholder="Full Name" type="text" onClick={open}/>
                    <div class="button">
                        <button type="submit" onClick={handleNavigateToHome2}>Register</button>
                    </div>
                </form>
                <div class="teks">
                    <p>Already have an account? klik <a><b>Here</b></a></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register