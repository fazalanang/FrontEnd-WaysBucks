import "./login.css"
import { useNavigate } from "react-router-dom";
import React from "react"

function Login ({ open,onClose }) {
    const navigate = useNavigate ()
    const handleNavigateToHome2 = () => {
        navigate ('/home')
    }
    if (!open) return null
    return (
        < >
        <div class="backgroundContainer" onClick={onClose} >
        <div class="containerLogin" >
                <h1>Login</h1>
                <form>
                        <input placeholder="Email" type="text" onClick={open}/>
                        <input placeholder="Password" type="password" onClick={open}/>
                    <div class="button">
                        <button type="submit" onClick={handleNavigateToHome2}>Login</button>
                    </div>
                </form>
            <div class="teks">
                <p>Don't have an account? klik <a><b>Here</b></a></p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Login