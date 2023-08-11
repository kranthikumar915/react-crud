import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const URL = 'https://dummyjson.com'

function Create(props){
    const [user,setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const navigate = useNavigate()


    const readValue = (e) => {
        const {name, value} = e.target //e.target input tag
        setUser({ ...user, [name]:value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('user =', user)
        await axios.post(`${URL}/users/add`, user)
          .then(res => {
            toast.success('new user added successfully')
            navigate('/')
          }).catch(err => toast.error(err.message))
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Create</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="firstName">First NAme</label>
                                    <input type="text" name="firstName" value={user.firstName} onChange={readValue} id="firstName" className="form-control" required  />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" value={user.lastName} onChange={readValue} id="lastName" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={user.email} onChange={readValue} id="email" className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" name="phone" value={user.phone} onChange={readValue} id="phone" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Add User" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Create