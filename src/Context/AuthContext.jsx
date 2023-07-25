import React, {createContext,useState,useEffect,useCallback} from "react";

//const ref
export const AuthContext = React.createContext();

//context provider

const AuthProvider = (props) => {

    //current user state -> which carries login user credientials
    //null -> before login
    // login user information -> after login
    const [currentUser,setCurrentUser] = useState(null)

    return (
        <AuthContext.Provider value={{currentUser}}>
            {
                props.children
            }

        </AuthContext.Provider>
    )
}
export default AuthProvider