class LoginPage{
    constructor(page){
        // Para mapear os elementos
        this.page = page;
        this.campoEmail = '#email';
        this.campoSenha = '#password';
        this.botaoLogar = '//*[@id="root"]/div/div/form/button';
        this.mensagemErro = '//*[@id="root"]/div/div/form/div[1]/span'

    }

    // metodo para realizar o preenchimento
    async userLogin(email, senha) {
        await this.page.fill(this.campoEmail, email);
        await this.page.fill(this.campoSenha, senha);
        await this.page.click(this.botaoLogar);
    }

    // metodo para preencher login com dados invalidos
    async userLoginInvalido(email, senha){
        await this.page.fill(this.campoEmail, email);
        await this.page.fill(this.campoSenha, senha);
        await this.page.click(this.botaoLogar);
    }

    // metodo para capturar mensagem de erro
    async capturaMenssagemDeErro() {
        await this.page.waitForSelector(this.mensagemErro); // Localina o elemento que contem o texto
        return await this.page.textContent(this.mensagemErro); // Verifica se o texto esta contido no elemento
    }

}

module.exports = LoginPage;


