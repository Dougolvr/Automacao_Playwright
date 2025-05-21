// Executa todos os testes -> npx cucumber-js
// Executa apenas um teste -> npx cucumber-js --tags @nomedatag
// ====================================================================================================

require('../support/hoohks'); // Importa as variáveis globais

const { Given, When, Then } = require('@cucumber/cucumber');
const CREDENTIALS =  require('../support/credential');
const { expect } = require('playwright/test'); // para realizar asserções (validações) nos testes.

// Cenário 1: Login com sucesso
Given('que o usuário queira se logar', async () => {
  console.log('Usuário iniciou o processo de login.');
});

When('ele digitar as credenciais válidas', async () => {
  const {email, senha} = CREDENTIALS.usuario1;
  await loginPage.userLogin(email, senha);
});

Then('deve acessar o site com sucesso', async () => {
  await page.waitForURL('https://front.serverest.dev/home');
  await page.waitForSelector('.btn.text-light');
  const txtVisivel = await page.isVisible('.btn.text-light');
  expect(txtVisivel).toBe(true);
});

// Cenário 2: Login com dados inválidos
When('ele digitar as credenciais inválidas', async () => {
  const {email, senha} = CREDENTIALS.usuario2;
  await loginPage.userLogin(email, senha);
});

Then('deve aparecer a mensagem {string}', async (mensagemEsperada) => {
  const mensagemErro = await loginPage.capturaMenssagemDeErro(); // Método que esta criado na loginpage.js
  expect(mensagemErro).toContain(mensagemEsperada);
});

