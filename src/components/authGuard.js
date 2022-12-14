import { useAuth } from '../providers/AuthProvider'
import { useRouter } from "next/router"
import { useEffect } from "react"
import Loading from './loading';

export function AuthGuard({ children }) {
    const { user, initializing, setRedirect } = useAuth(true)
    const router = useRouter()

    useEffect(() => {
        if (!initializing) {
            //auth is initialized and there is no user
            if (!user) {
                // remember the page that user tried to access
                setRedirect(router.route)
                router.push("/login", undefined, { shallow: true })
            }
        }
    }, [initializing, router, user, setRedirect])

    /* show loading indicator while the auth provider is still initializing */
    if (initializing) {
        return (<Loading text="Application Loading" />)
    }

    // if auth initialized with a valid user show protected page
    if (!initializing && user) {
        return <>{children}</>
    }

    /* otherwise don't return anything, will do a redirect from useEffect */
    return null
}
