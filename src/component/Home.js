import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import UserItem from "./screen/UserItem";

const URL = "https://dummyjson.com"

function Home(props){
    const [users,setUsers] = useState([])

    const getUsers = useCallback(() => {
        const readUser = async() => {
            /*
            fetch(`${URL}/users`,{
                method: "GET",
                headers: {"Content-Type" : "application/json"}
            })
            .then(res => res.json())
            .then(out => {})
            .catch(err => {})
            */

            await axios.get(`${URL}/users`)
              .then(res => {
                console.log('users =', res.data)
                setUsers(res.data.users)
              })
              .catch(err => toast.error(err.message));


        }
        readUser()
    },[])

    useEffect(() => {
        getUsers()
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Home</h3>
                </div>
            </div>

            <div className="row">
                {
                    users && users.map((item,index) => {
                        return(
                            <UserItem key={index} {...item} />
                        )
                    } )
                }

            </div>





        </div>
    )
}

export default Home