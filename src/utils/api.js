class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getCharacters() {
        return fetch(`${this._url}`, {
                headers: this._headers
            })
            .then(this._checkResponse)
    }
}

const config = {
    url: 'https://rickandmortyapi.com/api/character',
    headers: {
        'Content-Type': 'application/json'
    }
}

const api = new Api(config)

export default api;