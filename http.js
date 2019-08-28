
class EasyHTTP {
    //Make HTTP GET request
   async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make HTTP POST request
    async post(url, data){
           const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
    }

    //Make HTTP PUT request
    async put(url, data){
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
    }

    //Make an HTTP Delete request
   async delete(url){
            const response = await fetch(url, {
                method: 'Delete',
                headers: {
                    'content-type': 'application/json'
                }
            });
            const resData = await 'User was deleted';
            return resData;
    }
}
