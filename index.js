const { default: axios } = require("axios");
const { exec } = require("child_process");
const fs = require('fs');
class ArxuSec {
    constructor(options) {
        this.options = options;
    }
    checkAuth(runCode) {
        axios.get(`https://api.arxu-sec.com/api/v2/${this.options.apikey}/${this.options.script}/${this.options.license}`, { method: 'GET' }).then((res) => {
            // create a file with the result
            if (res.data.status == 'Authorized') {
                runCode();
            } else {
                throw new Error(res.data.status);
            }
        }).catch((e) => {
            console.error(e)
        })
    }
}

module.exports = function idk(options) {
    return new ArxuSec(options);
}