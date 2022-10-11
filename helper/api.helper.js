const axios = require('axios');
const { ENV_URL } = require('../constant/environemnt');

const sendingRequest = async (method = "get", url, data = null, authToken = null) => {
    try {
        const response = await axios({
            method,
            url: `${ENV_URL}/api/v1/${url}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${authToken}`
            },
            data
        });
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return {
            status: error.response.status
        }
    }
}



const getToken = async (method = "get", data = null) => {
    try {
        const response = await axios({
            method,
            url: `${ENV_URL}/uat/sso/oauth/token`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic dWk6dWltYW4='
            },
            data
        });
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return {
            status: error.response.status
        }
    }
}

module.exports = {
    sendingRequest,
    getToken 
}