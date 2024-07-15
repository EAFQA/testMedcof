describe('home', () => {
    it('GrupoMedcof deve estar online', () => {

        cy.visit('https://www.grupomedcof.com.br/')
            .title()
            .should('eq', 'Residência Médica: Provas, Cursos, Extensivos - Grupo MEDCOF')
            .url()
            .should('be.equal', 'https://www.grupomedcof.com.br/home/')
            .end()
    });
});