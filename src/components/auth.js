import { login } from '../helpers/auth';
import { setAuthUser, getAuthUser, clearAuthUser } from '../helpers/storageHelper'

export class Auth {

    constructor() {
        this.user = null
        this.error = null
    }

    onAuthStateChanged(cb) {
        this.cb = cb

        return () => {
            this.cb = null
        }
    }

    onUserChange(user, error) {
        this.cb && this.cb(user, error)
    }

    async signIn(username, password) {
        try {
            const response = await login(username, password);
            this.user = { ...response }
            setAuthUser(this.user)
            this.onUserChange(this.user)
            return this.user
        }
        catch (e) {
            this.error = { message: "Wrong username or password" }
            this.onUserChange(null, this.error)
        }
    }

    signOut() {
        clearAuthUser()
        this.user = null
        this.onUserChange(this.user)
    }

    resolveUser() {
        setTimeout(() => {
            this.user = window ? getAuthUser() : null
            this.onUserChange(this.user)
        })
        return this
    }
}
