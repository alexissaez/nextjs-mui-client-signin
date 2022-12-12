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

export const forgotPassword = (email) => {
    const body = JSON.stringify({ email });
    return request(`${API_URL}api/forgotpassword/`, {
        method: 'POST',
        headers: getHeaders(),
        redirect: 'follow',
        body
    });
}

export const passwordRecovery = (token, password) => {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `token ${token}`);
    const body = JSON.stringify({ password });
    return request(`${API_URL}api/users/me/`, {
        method: 'PUT',
        redirect: 'follow',
        headers,
        body
    });
}
