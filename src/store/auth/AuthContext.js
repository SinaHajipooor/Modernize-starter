import { apiLogin } from "@/utils/api/auth/apiLogin";
import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiAuthenticate } from "@/utils/api/auth/apiAuthenticate";


// define default values
export const AuthContext = createContext({
    isLoading: false,
    token: '',
    user: { id: '', username: '', mobile: '' },
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
    async function signup() { }
    // login user 
    async function login(userInfo) {
        setIsLoading(true);
        // send user info into laravel api and then get the userdata (user id and token ) from that api
        const userData = await apiLogin(userInfo)
        setToken(userData.token);
        setUser({
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
        setIsLoading(true);
        const response = await axios.get('/api/auth/login')
        const laravelResponse = await apiAuthenticate();
        console.log(laravelResponse);
        setIsLoading(false)
        if (response.data.token) {
            return response.data.token.value;
        }
    }
    // user logout
    async function logout() {
        setIsLoading(true);
        const response = await axios.post('/api/auth/logout');
        // Remove all user info
        setToken('');
        setUser({});
        setIsAuthenticated(false);
        setIsLoading(false);
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