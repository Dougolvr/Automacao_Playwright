# Automação com Playwright

Este projeto foi criado para automatizar testes utilizando a ferramenta Playwright.

## Tecnologias

- Cucumber
- Node.js
- Playwright

## O que precisa para rodar

- `npm init -y` -> para iniciar o projeto
- `npm install playwright` -> Instala o pacote Playwright (código, APIs, etc.).
- `npx playwright test` -> Baixa e instala os navegadores necessários para rodar os testes de interface.
- `npm install @cucumber/cucumber` -> para instalar o cucumber

## Como rodar os testes

- `npx cucumber-js` -> Executa todos os testes
- `npx cucumber-js --tags @nomedatag` -> Executa apenas um teste