import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "../Slider";
import SignUp from "./SignUp";
import { validateEmail, validateRequiredField,validatePhone } from "../validation/ValidatedFields";


const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState({
        errorFirstName:"",
        errorLastName:"",
        errorEmail:"",
        errorPhoneNumber:""
    })
    const {email, password} = user;
    const {errorEmail} = error

    const LoginUser = async (e) => {
        e.preventDefault()
        const errorEmail = validateEmail(email)
        if (errorEmail === "") {
            const response = await axios.post("http://127.0.0.1:8000/user/api/auth/login", user)
            console.log(response.data)
            debugger
            if (response.status === 200 ) {
                console.log(response.data)
                history.push('/products')
                alert("login successfully")
            }else {
                alert("Oops something went wrong.")
            }
        }else {
            setError({
                errorEmail:errorEmail
            })
        }
    }

    const ValChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    return (
        <>
            <Slider />
            {/* <!--form--> */}
            <section id="form">
                <div className="container py-4" >
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-1">
                            {/* <!--login form--> */}
                            <div className="login-form">
                                <h2>Login to your account</h2>
                                <form action="#">
                                    <input type="email" placeholder="Email Address" name="email" onChange={e => ValChange(e)}/>
                                    {errorEmail && <p className="error_validate" style={{color:'red'}}>{errorEmail}</p>}
                                    <input type="password" placeholder="Password" name="password" onChange={e => ValChange(e)}/>
                                    <span>
                                        <input type="checkbox" className="checkbox" /> 
                                        Keep me signed in
                                    </span>
                                    <button type="submit" className="btn btn-default" onClick={ e => LoginUser(e)}>Login</button>
                                </form>
                            </div>
                            {/* <!--/login form--> */}
                        </div>
                        <div className="col-sm-1">
                            <h2 className="or">OR</h2>
                        </div>
                        <SignUp />
                    </div>
                </div>
            </section>
            {/* <!--/form--> */}
        </>
    )
}


export default Login;