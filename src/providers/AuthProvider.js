import React, { useEffect, useState } from "react"
import { Auth } from "../components/auth.js"
import { setRedirect, getRedirect, clearRedirect } from '../services/storageHelper'

const auth = new Auth()

const pagesExuded = ['/login', '/logout']

function _setRedirect(redirect) {
    setRedirect(
        pagesExuded.includes(redirect) ? '/' : redirect
    )
}

export const AuthContext = React.createContext()
AuthContext.displayName = "AuthContext"


export function useAuth() {
    const auth = React.useContext(AuthContext)

    if (!auth) {
        throw new Error("useAuth must be used within AuthProvider")
    }

    return auth
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [initializing, setInitializing] = useState(true)

    /*
      NOTICE: this is not production ready code!
      just a quick demo of resolving the initial user
    */
    useEffect(() => {
        auth.resolveUser(2000).onAuthStateChanged((user, error) => {
            if (user) {
                setUser(user)
                setError(null)
            } else {
                setUser(null)
                if (error) {
                    setError(error)
                }
            }
            setInitializing(false)
        })
    }, [])

    const value = {
        user,
        error,
        auth,
        initializing,
        setRedirect: _setRedirect,
        getRedirect,
        clearRedirect,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
