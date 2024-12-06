import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const authInfo = {
        name:'imran'
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;