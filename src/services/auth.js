import { API_URL } from '../settings'
import { getHeaders } from './headers'
import { request } from './request'

export const login = (username, password) => {
    const body = JSON.stringify({ username, password })
    return request(`${API_URL}api-auth/`, {
        method: 'POST',
        headers: getHeaders(),
        redirect: 'follow',
        body
    })
}
