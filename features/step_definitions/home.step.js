require('../support/hoohks');

const { Given, When, Then } = require('@cucumber/cucumber');
const CREDENTIALS = require('../support/credential');
const { expect } = require('playwright/test');

// Cenario 1: Pesquisar por um produto válido
Given('que o usuário está logado no sistema', async() => {
    const {email, senha} = CREDENTIALS.usuario1;
    await loginPage.userLogin(email, senha);
});

When('ele digitar {string} na barra de pesquisa', async(produto) => {
    await homePage.fazerPesquisaProduto(produto);
});

When('clicar no botão Pesquisar', async() => {
    console.log('Cliclou no botão Pesquisar')
    console.log('Produto pesquisado')
});

Then('deve ser exibido o botão {string} no resultado da pesquisa', async(mensagemBotao) => {
    await homePage.capturarEValidarBotaoAdicionar(mensagemBotao);
});

// Como o given e when são iguais para os 2 cenarios, não precisa repeti-los
// Cenário 2 Pesquisa por um produto inválido
Then('deve ser exibida a mensagem {string} no resultado da pesquisa', async(msgNenhumProduto) => {
    await homePage.capturaMensagemProdutoNaoEncontrado(msgNenhumProduto);
});