import React, { useState } from "react";
import { NavLink ,useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import Fireapp from "../../Config/firebaseConfig";

function Login(props){
    const [login,setLogin] = useState({
        user: "",
        pass: ""
    })

    const navigate = useNavigate()

    const readValue = (e) => {
        const { name, value } = e.target
        setLogin({...login,[name]:value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            console.log(`login user =`, login)
            await Fireapp.auth().signInWithEmailAndPassword(login.user,login.pass)
                .then(res => {
                    toast.success(`Hi, ${res.user.email}, login successful...`)
                    navigate(`/`)
                }).catch(err => {
                    toast.error(err.message)
                })
        }catch(error){
            toast.error(error.message);
        }
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Login</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-12">
                                    <label htmlFor="user">UserName</label>
                                    <input type="email" name="user" value={login.user} onChange={readValue} id="user" className="form-control" required />
                                </div>
                                <div className="form-group mt-12">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" value={login.pass} onChange={readValue} id="pass" className="form-control" required/>
                                </div>
                                <div className="form-group mt-12">
                                    <input type="submit" value="Login" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Login