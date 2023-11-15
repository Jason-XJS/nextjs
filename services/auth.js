import {createContext, useContext, useEffect, useState} from "react";
import {authedRequest, LOCAL_TOKEN} from "@/services/http";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


const AuthContext = createContext();


const useAuthData = () => {
    const [authed, setAuthed] = useState(false);
    const [userData, setUserData] = useState();


    return {
        authed,
        userData,
        setUserData,
        login: (userData, token) => {
            return new Promise((resolve, reject) => {
                localStorage.setItem(LOCAL_TOKEN, token);
                setAuthed(true);
                setUserData(userData);
                resolve();
            })
        },
        logout: () => {
            return new Promise((resolve, reject) => {

                localStorage.removeItem(LOCAL_TOKEN);
                setAuthed(false);
                setUserData(undefined);
                resolve();
            })
        }
    }
}

export const AuthProvider = ({children}) => {
    const data = useAuthData();

    useEffect(() => {
        if (localStorage.getItem(LOCAL_TOKEN)) {
            authedRequest.get(process.env.SERVER_URL + `/api/profile`)
                .then(res => {
                    if (res && res.data) {
                        data.setUserData(res.data);
                    }
                })
                .catch(err => {
                    alert("Login expired!");
                    window.location.href = `/login`;
                })
        }
    }, []);

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}