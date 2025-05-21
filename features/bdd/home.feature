#language: pt

Funcionalidade: Pesquisa de produtos

Contexto:
    Dado que o usuário está logado no sistema

@Pesquisa
Cenário: Pesquisar por um produto válido
    Quando ele digitar "Samsung" na barra de pesquisa
    E clicar no botão Pesquisar
    Então deve ser exibido o botão "Adicionar a lista" no resultado da pesquisa

@PesquisaInvalida
Cenário: Pesquisa por um produto inválido
    Quando ele digitar "produto inválido" na barra de pesquisa
    E clicar no botão Pesquisar
    Então deve ser exibida a mensagem "Nenhum produto foi encontrado" no resultado da pesquisa