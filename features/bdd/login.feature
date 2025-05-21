# language: pt

Funcionalidade: Login no sistema

Contexto:
    Dado que o usuário queira se logar

@Loginsucesso
Cenário: Login com sucesso
    Quando ele digitar as credenciais válidas
    Então deve acessar o site com sucesso

@LoginDadoInvalido
Cenário: Login com dados inválidos
    Quando ele digitar as credenciais inválidas
    Então deve aparecer a mensagem 'Email e/ou senha inválidos'
