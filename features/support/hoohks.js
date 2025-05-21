// concentra as inicializações do navegador, o fechamento e possíveis cenários antes e depois dos testes.

require('../support/env'); // Importa as variáveis globais

const { Before, After } = require('@cucumber/cucumber');
const LoginPage = require('../pages/loginpage');
const HomePage = require('../pages/homePage');

let page, browser, loginPage, homePage;

// Abre o navegador e navega para a página antes de cada cenário
Before(async() => {
    browser = await iniciarNavegador(); // Usando a função global de env.js
    page = await browser.newPage();
    await page.goto(baseURL);
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

  // Exporta as instâncias para serem usadas nos steps
    global.page = page;
    global.browser = browser;
    global.loginPage = loginPage;
    global.homePage = homePage;
});

// Fecha o navegador após cada cenário
After(async() =>{
    await browser.close();
});