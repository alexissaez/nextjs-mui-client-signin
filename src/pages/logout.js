import { useEffect } from "react"
import { useAuth } from "../providers/AuthProvider"

export default function SignOut() {
    const { auth } = useAuth()

    useEffect(() => {
        auth.signOut()
    }, [auth])

    return <></>
}
