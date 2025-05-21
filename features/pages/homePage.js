// elementos de interação da pagina home
const { expect } = require('playwright/test');

class HomePage{
    constructor(page){
        this.page = page;
        this.barraPesquisa = '[data-testid="pesquisar"]';
        this.botaoPesquisar = '[data-testid="botaoPesquisar"]';
        this.botaoAdicionarALista = '//*[@id="root"]/div/div/div[2]/div/section/div[1]/div/div/a[2]/button'
        this.mensagemNenhumProduto = '//*[@id="root"]/div/div/div[2]/div/section/div/div/div/p'
    }

    // Validação - metodo para fazer pesquisa
    async fazerPesquisaProduto(produto) {
        await this.page.fill(this.barraPesquisa, produto); // Localiza o elemento e preenche o campo
        await this.page.click(this.botaoPesquisar);
    }

    // Validação - metodo para captura botao adicinar a lista
    async capturarEValidarBotaoAdicionar(mensagemBotao){
        await this.page.waitForSelector(this.botaoAdicionarALista, { state: 'visible' }); // verifica a visibilidade do botao
        const botaoAdicionar = await this.page.textContent(this.botaoAdicionarALista); // Verifica se o botao contém o texto
        expect(botaoAdicionar).toContain(mensagemBotao)
    }

    // Validação - metodo para capturar mensagem de produto não encontrado
    async capturaMensagemProdutoNaoEncontrado(msgNenhumProduto){
        await this.page.waitForSelector(this.mensagemNenhumProduto);
        const mensagemNenhumProd = await this.page.textContent(this.mensagemNenhumProduto);
        expect(mensagemNenhumProd).toContain(msgNenhumProduto);
    }

}
module.exports = HomePage;