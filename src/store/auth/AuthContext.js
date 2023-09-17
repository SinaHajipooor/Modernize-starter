import { createContext, useState } from "react";

// define default values
export const AuthContext = createContext({
    token: '',
    user: {},
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { }
});

// provider 
const AuthContextProvider = ({ children }) => {
    // user token
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // authenticate user 
    const authenticate = (token, userData) => {
        setToken(token);
        setUser(userData);
        setIsAuthenticated(true);
        // set token into cookies
    };
    // logout user 
    const logout = () => {
        // remove all user info
        setToken('');
        setUser({});
        setIsAuthenticated(false);
        // remove token from coockie
    };
    const value = {
        token: token,
        user: user,
        isAuthenticated: isAuthenticated,
        authenticate: authenticate,
        logout: logout
    };
    // return the provider with values
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;