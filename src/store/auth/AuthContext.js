import { apiLogin } from "@/utils/api/auth/apiLogin";
import { createContext, useState } from "react";
import axiosConfig from "@/utils/axios";
import axios from "axios";

// define default values
export const AuthContext = createContext({
    isLoading: false,
    token: '',
    user: {},
    isAuthenticated: false,
    login: (userInfo) => { },
    signup: () => { },
    logout: () => { }
});

// provider 
const AuthContextProvider = ({ children }) => {
    // ------------ STATES -------------
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // ------------ METHODS -------------
    // user signup 
    async function signup() { }
    // login user 
    async function login(userInfo) {
        setIsLoading(true);
        // send user info into laravel api and then get the userdata (user id and token ) from that api
        const userData = await apiLogin(userInfo)
        setToken(userData.token);
        setUser(userData.user);
        // send user token into next server
        const response = await axios.post('/api/auth/login', { token: userData.token });
        console.log(response);
        setIsAuthenticated(true);
        setIsLoading(false);
    }
    // user logout
    const logout = () => {
        setIsLoading(true);
        // Remove all user info
        setToken('');
        setUser({});
        setIsAuthenticated(false);
        setIsLoading(false);
    };
    // ------------ VALUES -------------
    const value = {
        isLoading: isLoading,
        token: token,
        user: user,
        isAuthenticated: isAuthenticated,
        login: login,
        signup: signup,
        logout: logout
    };
    // return the provider with values
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;