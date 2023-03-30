import { createContext,useEffect,useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    currentUser:JSON.parse(localStorage.getItem("user")) || null, 
};

export const Authcontext = createContext(INITIAL_STATE);

export const AuthcontextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect (()=>{
        localStorage.setItem("user",JSON.stringify(state.currentUser))
    },[state.currentUser])

    return (
        <Authcontext.Provider value={{currentUser:state.currentUser,dispatch
        }}>
            {children}
        </Authcontext.Provider>
    );
};