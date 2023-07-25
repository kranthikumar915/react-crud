import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function Menu(props){
    const context = useContext(AuthContext)
    const currentUser = context.currentUser
    return (
       <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">React Crud</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={
                currentUser ? "collapse navbar-collapse justify-content-between" :"collapse navbar-collapse justify-content-end"
            } id='menu'>

                {
                    currentUser ? (<ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={'/'} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/create'} className="nav-link">Create</NavLink>
                            </li>
                </ul>) : 
                (<ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={`/login`} className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/register`} className="nav-link">Register</NavLink>
                            </li>
                </ul>)
                }
  
            </div>
        </div>
       </nav>
    )
}
export default Menu