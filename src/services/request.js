export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const handlerResponse = async response => {
    const jsonResponse = await response.json()
    if ([200, 201].includes(response.status)) {
        return jsonResponse
    }
    const { message } = jsonResponse;
    throw new ValidationError(message)
}

const handlerError = error => {
    throw error;
}

export const request = (url, options) => {
    return fetch(url, { ...options })
        .then(handlerResponse)
        .catch(handlerError);
}
