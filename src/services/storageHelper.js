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
    window.sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(AuthUser))
}

export function getAuthUser() {
    const user = window.sessionStorage.getItem(AUTH_USER_KEY)
    return user ? JSON.parse(user) : null
}

export function clearAuthUser() {
    return window.sessionStorage.removeItem(AUTH_USER_KEY)
}