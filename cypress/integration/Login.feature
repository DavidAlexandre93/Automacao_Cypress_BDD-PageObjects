Feature: Acesso ao site Dasa

    Background: Acessar o site da Dasa
        Given acesso o site Dasa

    @testedasa
    Scenario: Clicar no botao Assista e validar mensagem 
        Given acesso o site Dasa
        When acesso a pagina Home
        Then devo visualizar Texto

    