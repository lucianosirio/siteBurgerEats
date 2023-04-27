/// <reference types = "cypress"/>


import Dados from '../support/bugerDev';


describe ('SiteBugerEats', () => {

    //CENÁRIOS BASEADOS NA TÉCNICA BDD GERALMENTE CRIADO EM OUTRAS FERRAMENTAS PARA SER COMPARTILHADO ENTRE A EQUIPE

    /* Cenário 001 - A home page deve estar On-line
            Dado quando estiver na home page deverá conter a chamada sobre o serviço, 
            quando ser acessado a Url 
            então exibir o botão "Cadastre para fazer entregas"*/

    it('Página principal on-line', () => {
    
        cy.visit('/')  //Url configurada no arquivo cypress.json
        cy.get('#page-home main h1')
            .should('have.text','Seja um parceiro entregador pela Buger Eats')

    })


    /* Cenário  002 - Funcionalidade do Botão de Cadastro
            Dado que o botão esteja visivel,
            quando quanto ter acessado a Url https://buger-eats.vercel.app/deliver 
            então clicar no botão */

    it('Botão de Cadastro', () => {

        cy.get('a[href="/deliver"]')
            .should('be.visible')
            .click()  

    })

    
    /* Cenário 003 - Página Cadastro do Entregador
        Dado ter acessado a página de Cadastro
        quando clicado no botão "Cadastre para fazer entregas
        então deverá aparecer a página com título "Cadastre-se para fazer entregas" */
        
    it('Cadastro do Entregador', () => {

        cy.get('#page-deliver form h1') //Check Point
            .should('have.text','Cadastre-se para  fazer entregas')
            /* bug identificado -- um espaço a mais entre as palavras "para" e "fazer".
               Abrir demanda para correção*/        
  
    })


    /* Cenário 004 - Preenchimento do campos da página de Cadastro 
        Dado ter apresentado os campos para preenchimento
        quando a página com título "Cadastre-se para fazer entregas for exibida"
        então realizar o preenchimento*/
    it('Preenchimento dos Campos', () => {
        
        Dados.escrevaNoCampo()

    })


    /* Cenário 005 - Verificar funcionalidade do botão "Buscar Cep"
        Dado ter preenchido os campos
        quando chegar ao campo Cep
        então clicar no botão Busca Cep*/
        
    it('Botão Buscar Cep', () => {

        cy.get('input[value="Buscar CEP"]')
            .should('be.visible')
            .click()

    })


    /* Cenário 006 - Inserir Complemento
        Dado que os campos de endereço foram preenchidos
        quando clicado no botão "Buscar Cep
        então preencher Campos de Complementos*/
        
    it('Preencher Complemento', () => {

        Dados.complemento()

    })


     /* Cenário 007 - Metodo de Entrega
        Dado que todos campos foram preenchidos
        quando decidido modo de entrega
        então selecionar a opção desejada*/
    it('Metodo de Entrega', () => {

            Dados.entrega()
            
    })


    /* Cenário 008 - Upload de Arquivo
        Dado que todos campos foram preenchidos
        quando possuir o arquivo em jpg
        então Clicar na imagem para realizar o upload do arquivo*/
    it('Upload de arquivo', () => {

        Dados.arquivo()
        
    })


    /* Cenário 009 - Botão "Cadastra-se para fazer entregas"
       
        quando necessário para continuação
        então clicar no botão "Cadastre-se para fazer entregas"*/
    it('Botão "Cadastra-se para fazer entrega"', () => {

        cy.get('button[class="button-success"]')
            .should('be.visible')
            .click() 
    })
 })






