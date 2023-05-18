import { createContext,useContext,useEffect,useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const INITIAL_STATE = {
    currentUser:JSON.parse(localStorage.getItem("user")) || null, 
};

export const Authcontext = createContext(INITIAL_STATE);

export const AuthcontextProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    const[user,setUser] = useState({});

    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

        });
    },[]);
    useEffect (()=>{
        localStorage.setItem("user",JSON.stringify(state.currentUser))
    },[state.currentUser])

    return (
        <Authcontext.Provider value={{currentUser:state.currentUser,dispatch,googleSignIn
        }}>
            {children}
        </Authcontext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(Authcontext);

}