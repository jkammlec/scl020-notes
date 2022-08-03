import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config.js";


export const authContext = createContext()

//hook personalizado, para no importar en cada vista este componente
export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider') //error en caso de que no esté provider envolviendo a los componentes
    return context;
};

export function AuthProvider({ children }) {

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    
    const logout = () => signOut(auth); //se trae la función para desloguear de firebase

    return (
        <authContext.Provider value={{ signUp, login, logout, loginWithGoogle}}>
            {children}
        </authContext.Provider>
        // respecto al value en provider: todos los elementos hijos van a poder acceder al objeto user
        //todo componente hijo va poder acceder a este componente padre (provider)
    )
}