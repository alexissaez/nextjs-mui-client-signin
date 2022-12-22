import { getAuthUser } from '../services/storageHelper'

const getToken = () => {
    const { token } = getAuthUser() ?? {}
    return token
}

export const getHeaders = () => {
    const headers = new Headers();
    const token = getToken()
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    if (token) headers.append("Authorization", `token ${token}`);
    return headers;
}

export const getHeadersFormData = () => {
    const headers = new Headers();
    const token = getToken()
    if (token) headers.append("Authorization", `token ${token}`);
    return headers;
}
