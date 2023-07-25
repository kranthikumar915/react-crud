import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Outlet,Navigate } from 'react-router-dom'

function PrivateRouter(props){
    const context = useContext(AuthContext)
    const currentUser = context.currentUser

    return (
        <React.Fragment>
            {
                currentUser ? <Outlet/> : <Navigate to={`/login`}/>
            }
        </React.Fragment>
        
    )
}
export default PrivateRouter
/* div, main ,section, article,header, footer, aside - html block elements
     react fragment => virtual react block element
*/
