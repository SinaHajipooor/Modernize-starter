import { apiLogin } from "@/utils/api/auth/apiLogin";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiAuthenticate } from "@/utils/api/auth/apiAuthenticate";


// define default values
export const AuthContext = createContext({
    isLoading: false,
    token: '',
    user: { avatar: null, firstName: '', lastName: '', id: '', username: '', mobile: '' },
    isAuthenticated: false,
    login: (userInfo) => { },
    signup: () => { },
    authenticate: () => { },
    logout: () => { },
});



// provider 
const AuthContextProvider = ({ children }) => {
    // ------------ STATES -------------
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()
    // ------------ METHODS -------------
    // user signup 
    async function signup() {
    }

    // login user 
    async function login(userInfo) {
        setIsLoading(true);
        // send user info into laravel api and then get the userdata (user id and token ) from that api
        const userData = await apiLogin(userInfo)
        setToken(userData.token);
        setUser({
            avatar: userData.user.avatar,
            firstName: userData.user.first_name,
            lastName: userData.user.last_name,
            id: userData.user.id,
            username: userData.user.username,
            mobile: userData.user.mobile
        });
        // send user token into next server
        const response = await axios.post('/api/auth/login', { token: userData.token });
        setIsAuthenticated(true);
        setIsLoading(false);
        router.replace('/')

        return response;
    }

    // authenticate user 
    async function authenticate() {
        try {
            setIsLoading(true);
            // ask for getting the user token
            const response = await axios.get('/api/auth/authenticate')
            // check if user is authenticated ( send th token into backend api and get the user data if is authenticated)
            const isAuthenticatedResponse = await apiAuthenticate();
            // set user data into context state if the user is authenticated 
            if (isAuthenticatedResponse.status == 200) {
                setUser({
                    avatar: isAuthenticatedResponse.data.avatar,
                    firstName: isAuthenticatedResponse.data.first_name,
                    lastName: isAuthenticatedResponse.data.last_name,
                    id: isAuthenticatedResponse.data.id,
                    username: isAuthenticatedResponse.data.username,
                    mobile: isAuthenticatedResponse.data.mobile
                });
            }
            setIsAuthenticated(true)
            return response;
        } catch (error) {
            console.log(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    // user logout
    async function logout() {
        setIsLoading(true);
        const response = await axios.get('/api/auth/logout');
        // Remove all user info
        setToken('');
        setUser({});
        setIsAuthenticated(false);
        setIsLoading(false);
        router.replace('/auth/login')
        return response;
    };
    // ------------ VALUES -------------
    const value = {
        isLoading: isLoading,
        token: token,
        user: user,
        isAuthenticated: isAuthenticated,
        login: login,
        signup: signup,
        authenticate: authenticate,
        logout: logout
    };

    // return the provider with values
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;