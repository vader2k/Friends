import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    );

    const loginUser = () => {
        setCurrentUser(true)
        console.log('true')
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser, loginUser}}>
            {children}
        </AuthContext.Provider>
    )
}