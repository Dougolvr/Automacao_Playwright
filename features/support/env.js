const { chromium } = require("playwright")

global.iniciarNavegador = async() =>{
    return await chromium.launch({ headless: false });
};

global.baseURL = 'https://front.serverest.dev/login'; 
global.timeout = 10000;