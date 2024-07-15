import { faker } from '@faker-js/faker';

Cypress.Commands.add('clicarBotaoNossosCursos', () => {
    cy.visit('/home')
    cy.url().should('be.equal', 'https://www.grupomedcof.com.br/home/')
    cy.contains('button', 'Nossos Cursos').click()
        .url().should('be.equal', 'https://www.grupomedcof.com.br/home/#cursos-section')
    cy.contains('div span', 'Todos').should('be.visible')
    cy.contains('div span', 'HIIT R1').should('be.visible')
        .screenshot()
        .end()
})

Cypress.Commands.add('navegarURLNossosCursos', () => {
    cy.visit('/#cursos-section')
    cy.contains('div span', 'Todos').should('be.visible')
    cy.contains('div span', 'HIIT R1').should('be.visible')
        .end()
})

Cypress.Commands.add('navegarURLNossosCursosFalha', () => {
    cy.visit('/#cursos-section')
    cy.contains('div span', 'Todos').should('be.visible')
    cy.contains('div span', 'HIIT R1 11').should('be.visible')
        .end()
})

Cypress.Commands.add('cadastrarUsuarioComSucesso', () => {
    var fakerbr = require('faker-br');
    let meuCpf = fakerbr.br.cpf();
    let senha = faker.internet.password({ length: 12, memorable: true, pattern: /[A-Z]/, prefix: 'Hello@3' })
    let nome = faker.person.fullName()

    cy.visit(Cypress.env('cadastroURL') + 'auth/register')
    cy.url().should('be.equal', 'https://login.medcof.com.br/auth/register')
    cy.wait(300)
    cy.get('#name').type(nome)
    cy.get('#email').type(faker.internet.email())
    cy.get('#cpf').type(meuCpf)
    cy.get('#password').type(senha)
    cy.get('#confirmPassword').type(senha)
    cy.contains('button', 'Criar').click()
    cy.contains('Para concluir seu cadastro, verifique o email ').should('be.visible')
})