import { APP_KEY } from '../settings'

const REDIRECT_KEY = `${APP_KEY}_sign_in_redirect`
const AUTH_USER_KEY = `${APP_KEY}_user_key`

export function setRedirect(redirect) {
    window.sessionStorage.setItem(REDIRECT_KEY, redirect)
}

export function getRedirect() {
    return window.sessionStorage.getItem(REDIRECT_KEY)
}

export function clearRedirect() {
    return window.sessionStorage.removeItem(REDIRECT_KEY)
}

export function setAuthUser(AuthUser) {
    if (AuthUser) {
        window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(AuthUser))
    }
}

export function getAuthUser() {
    try {
        const user = window.localStorage.getItem(AUTH_USER_KEY)
        return user ? JSON.parse(user) : null
    }
    catch (_) {
        return null;
    }
}

export function clearAuthUser() {
    return window.localStorage.removeItem(AUTH_USER_KEY)
}