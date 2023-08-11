import React, { useCallback, useEffect, useState } from "react";
import { useParams, Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const URL = 'https://dummyjson.com'

function Details(props){

    const [user,setUser] = useState(false)

    const params = useParams()
    const navigate = useNavigate()
    console.log('params=', params)

    const getUsers = useCallback(() => {
        const readUsers = async() => {
            await axios.get(`${URL}/users/${params.userId}`)
               .then(res => {
                 console.log('single user =', res.data)
                 setUser(res.data)
               })
               .catch(err => toast.error(err.message))
        }
        
        readUsers()

    },[])

    useEffect(() => {
        getUsers()
    },[])
    
    // delete user
    const deleteUser = async (id) => {
        if(window.confirm(`Are you sure to delete user id =${id}?`)){
            await axios.delete(`${URL}/users/${id}`)
                .then(res => {
                    toast.success(`User info deleted successfully`);
                    navigate('/')
                }).catch(err => toast.error(err.message))
        }else{
            toast.warning('delete terminated')
        }
    } 


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Details</h3>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-center text-success"> {user.firstName} {user.lastName} </h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <img src={user.image ? user.image : "#"} alt="no image" className="card-img-top" />
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <p>
                                                    <strong>Email</strong>
                                                    <span className="text-success float-end"> {user.email} </span>
                                                </p>
                                                <p>
                                                    <strong>User NAme</strong>
                                                    <span className="text-success float-end"> {user.username} </span>
                                                </p>
                                                <p>
                                                    <strong>Phone</strong>
                                                    <span className="text-success float-end"> {user.phone} </span>
                                                </p>
                                                <p>
                                                    <strong>Domain</strong>
                                                    <span className="text-success float-end"> {user.domain} </span>
                                                </p>
                                                <p>
                                                    <strong>Age</strong>
                                                    <span className="text-success float-end"> {user.age} years</span>
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <NavLink to={`/Update/${user.id}`} className="btn btn-success" > Edit </NavLink>
                                                <botton className="btn btn-danger float-end" >Delete</botton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details