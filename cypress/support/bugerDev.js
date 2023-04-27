import {faker} from '@faker-js/faker';
const nomeentregador = faker.name.fullName()
const cpfentregador = '999999999-99'
const emailentregador = faker.internet.exampleEmail()
const whatsappentregador = 9999999999
const codpostalentregador = faker.address.zipCode('01037010')
const complemento1 = '999'
const complemento2 = 'BL 9999'


class Dados {

    escrevaNoCampo() {

        cy.get('input[name="name"]')
            .type(nomeentregador)        
        cy.get('input[name="cpf"]')
            .type(cpfentregador)
        cy.get('input[name="email"]')
            .type(emailentregador)
        cy.get('input[name="whatsapp"]')
            .type(whatsappentregador)
        cy.get('input[name="postalcode"]')
            .type(codpostalentregador)
        }

    complemento(){

        cy.get('input[name="address-number"]')
            .type(complemento1)
        cy.get('input[name="address-details"]')
            .type(complemento2)
    }
}



export default new Dados();