import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import backgroundLogin from "../../Assets/Img/bglogin.png";
import '../Login/Login.css';

export const Login = () => {
    const [error, setError] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleInput = (event) => {

        if (event.target.id === "email") {
            setUsername(event.target.id)
        } else if (event.target.id === password){
            setPassword(event.target.id)
        }
    }

    const validasi = () => {
        let passwordCorrect = 123456
        let usernameCorrect = "arditriyana@gmail.com"

        if(username === usernameCorrect){
            if(password === passwordCorrect){
                alert("ke selanjutnya")
            } else {
                alert("Upps Salah.")
            }    
        } else {
            alert("Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.")
        }
    }
    return (
        <div>
            <div className="Container-fluid">
                <div className="row">
                    <div className="col-lg-8" id="bgLogin">
                        <img src={backgroundLogin} className="backgroundLogin"></img>
                    </div>
        
                    <div className="col-lg-4" id="coSign">
                        <div className="rectangleLogin"></div>
                        <h3>Welcome, Admin BCR</h3>
                        
                        <Form>
                            <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input onChange={(event) => { handleInput(event) }} type="email" className="form-control" id="email" placeholder="Contoh: johndee@gmail.com"></input>
                            </div>
                            <div className="mb-4">
                                <label for="password" className="form-label">Password</label>
                                <input onChange={(event) => { handleInput(event) }} type="password" className="form-control" id="password" placeholder="6+ karakter"></input>
                            </div>
                            <button onClick={() => { validasi() }} className="button" >Sign In</button>
                        </Form>
        
                    </div>
        
                </div>
            </div>
        </div>
    )
}

