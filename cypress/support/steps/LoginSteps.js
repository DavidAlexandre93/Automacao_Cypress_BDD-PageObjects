/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

/*And("informo {} incorreto", (email) => {
    loginPage.informarEmail(email);
})*/

/*And("informo {} incorreta", (senha) => {
    loginPage.informarSenha(senha);
})*/

Given("acesso o site Dasa", () => {
    loginPage.acessarSite();
})

/*When("acesso a pagina Home", () => {
    loginPage.clicarBotaoPaginaLogin();
})*/

When("acesso a pagina Home", () => {
    loginPage.clicarBotaoAssita();
})

Then("devo visualizar Texto", () => {
    loginPage.visualizarTextoVideo();
})

/*Then("devo visualizar mensagem de erro", () => {
    loginPage.visualizarErroLogin();
})*/