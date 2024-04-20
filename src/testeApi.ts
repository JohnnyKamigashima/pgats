export const acessarApi = async (url: string, method: string, body: null) => {
    const requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        requestOptions.body = JSON.stringify(body);
    }

    return fetch(url, requestOptions)
        .then(response => {
            const { status } = response;
            return response.json().then(data => {
                return { status, data };
            });
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            throw error;
        });
}
