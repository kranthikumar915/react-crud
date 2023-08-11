import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const URL = 'https://dummyjson.com'

function Update(props){
    const [user,setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const params = useParams()
    const navigate = useNavigate()

    const getUser = useCallback(()=> {
        const readSingle = async () => {
            await axios.get(`${URL}/users/${params.id}`)
               .then(res => {
                setUser(res.data)
               }).catch(err => toast.error(err.message))
        }
        readSingle()
    },[])

    useEffect(() => {
        getUser()
    },[])

    const readValue = (e) => {
        const {name, value} = e.target //e.target input tag
        setUser({ ...user, [name]:value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('user =', user)
        await axios.patch(`${URL}/users/${params.id}`, user )
          .then(res => {
            toast.success("User updated successfully")
            navigate('/')
          }).catch(err => toast.error(err.message))
       
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Update</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="firstName">First Name</label>
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
                                    <input type="text" name="phone" value={user.phone} onChange={readValue} id="phone" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Update User" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Update