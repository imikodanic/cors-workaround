'use strict'
const { XMLHttpRequest } = use('xmlhttprequest')

class ApiController {
    async apiCall({request, response}) {
        const apiParams = request.post()

        let apiResponse
        const apiCall = new XMLHttpRequest();
        apiCall.open(apiParams.method, apiParams.url, false);

        for (let [key, value] of Object.entries(apiParams.headers)) {
            apiCall.setRequestHeader(key, value);
        }
        apiCall.setRequestHeader('Access-Control-Allow-Origin', '*');
        apiCall.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        apiCall.onreadystatechange = function() {
            if (this.readyState === 4) {
                apiResponse = JSON.parse(apiCall.responseText)
                response.ok({ apiResponse: apiResponse })
            }
        }
        if (apiParams.data) {
            let params = ''
            for (let [key, value] of Object.entries(apiParams.data)) {
                params += `&${key}=${value}`
            }
            apiCall.send(params);
        }

    }
}

module.exports = ApiController
