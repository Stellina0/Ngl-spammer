const axios = require('axios');

const url = 'https://ngl.link/api/submit';

const ngl_name = ""
const message = "Hello"

const headers = {
    "validateSSL": false
};

const body = {
    "username": ngl_name,
    "question": message,
    "deviceId": "",
    "gameSlug": "",
    "referrer": "",
    "userRegion":"TH"
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async ()=>{
    while (1) {
        await axios.post(url, body, {
            headers: headers,
        }).then(async (res)=>{
            console.log(res.data);
        })
        await sleep(2000)
    }
})();
