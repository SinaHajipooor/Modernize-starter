import { createContext, useState } from "react";

// define default values
export const AuthContext = createContext({
    isLoading: false,
    token: '',
    user: {},
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { }
});

// provider 
const AuthContextProvider = ({ children }) => {
    // states
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // authenticate user 
    const authenticate = (token, userData) => {
        setIsLoading(true);
        setToken(token);
        setUser(userData);
        setIsAuthenticated(true);
        // set token into cookies
        // ...
        setIsLoading(false)
    };
    // logout user 
    const logout = () => {
        setIsLoading(true);
        // remove all user info
        setToken('');
        setUser({});
        setIsAuthenticated(false);
        // remove token from coockie
        //     ... 
        setIsLoading(false);
    };
    const value = {
        isLoading: isLoading,
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