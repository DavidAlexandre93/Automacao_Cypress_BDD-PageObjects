/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão Assista na pagina Home
    clicarBotaoAssita() {
        cy.get(loginElements.assista()).click()
    }

    /* Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
    }*/

    /* Informa email no input do email
    informarEmail(email) {
        cy.get(loginElements.inputEmail()).type(email)
    }*/

    /* Informa senha no input da senha
    informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha)
    }*/

    //Verifica se o texto "Manifesto Dasa" está disponivel
    visualizarTextoVideo() {
        cy.get(loginElements.texto()).should('contain', 'MANIFESTO DASA')
    }

    /* Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        cy.get(loginElements.mensagemErro()).should('contain', 'Usuário ou senha inválidos.')
    }*/
    
}

export default LoginPage;
