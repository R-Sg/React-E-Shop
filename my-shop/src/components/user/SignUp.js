import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { validateEmail, validateRequiredField,validatePhone } from "../validation/ValidatedFields";

const SignUp = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phone:""
    })
    const [error, setError] = useState({
        errorFirstName:"",
        errorLastName:"",
        errorEmail:"",
        errorPhoneNumber:""
    })
    const {firstName, lastName, email, password, phone} = user;
    const {errorFirstName, errorLastName, errorPhoneNumber, errorEmail} = error

    const ValChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    const userRegister = async (e) => {
        e.preventDefault()
        const errorFirstName = validateRequiredField({ 'key': 'FirstName', 'val': firstName })
        const errorLastName = validateRequiredField({ 'key': 'LastLame', 'val': lastName })
        const errorEmail = validateEmail(email)
        const errorPhoneNumber = validatePhone(phone)
        if (errorFirstName === "" && errorLastName === "" && errorEmail === "" && errorPhoneNumber === "") {
            const response = await axios.post("http://127.0.0.1:8000/user/api/auth/register", user)
            if (response.status === 201) {
                console.log(response.data)
                history.push('/products')
            }else {
                alert("something went wrong.")
            }
        }else {
            setError({
                errorEmail:errorEmail,
                errorFirstName:errorFirstName,
                errorLastName:errorLastName,
                errorPhoneNumber:errorPhoneNumber
            })
        } 
    }
    
    return (
        <>
        <div className="col-sm-4">
            {/* <!--sign up form--> */}
            <div className="signup-form">
                <h2>New User Signup!</h2>
                <form action="#">
                    <input type="text" placeholder="First-Name" name="firstName"  onChange={ e => ValChange(e) } />
                    {errorFirstName && <p className="error_validate" style={{color:'red'}}>{errorFirstName}</p>}
                    <input type="text" placeholder="Last-Name" name="lastName"  onChange={ e => ValChange(e) } />
                    {errorLastName && <p className="error_validate" style={{color:'red'}}>{errorLastName}</p>}
                    <input type="email" placeholder="Email Address" name="email"  onChange={ e => ValChange(e) } />
                    {errorEmail && <p className="error_validate" style={{color:'red'}}>{errorEmail}</p>}
                    <input type="password" placeholder="Password" name="password"  onChange={ e => ValChange(e) } />
                    {/* {errorFirstName && <p className="error_validate">{errorFirstName}</p>} */}
                    <input type="number" name="phone" placeholder="Phone"  onChange={ e => ValChange(e) } />
                    {errorPhoneNumber && <p className="error_validate" style={{color:'red'}}>{errorPhoneNumber}</p>}         
                    <button type="submit" className="btn btn-default" onClick={ e => userRegister(e) }>Signup</button>
                </form>
            </div>
            {/* <!--/sign up form--> */}
        </div>
        </>
    )
}

export default SignUp;