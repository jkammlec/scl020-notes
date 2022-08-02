import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";

export const authContext = createContext()

//hook personalizado, para no importar en cada vista este componente
export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider') //error en caso de que no esté provider envolviendo a los componentes
    return context
}

export function AuthProvider({ children }) {
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    } //el signUp va a manejar el error, por eso no hay un await en la función de firebase auth
    return (
        <authContext.Provider value={{ signUp }}>
            {children}
        </authContext.Provider>
        // respecto al value en provider: todos los elementos hijos van a poder acceder al objeto user
        //todo componente hijo va poder acceder a este componente padre (provider)
    )
}