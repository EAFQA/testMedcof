describe('Validar Nossos Cursos', () => {

    context('Validar Navegacao da Home Para Nossos Cursos', () => {
        it('Navegar Da Home Para Nossos Cursos', () => {
            cy.clicarBotaoNossosCursos()
        });
    })

    context('Redirecionar URL Para Nossos Cursos', () => {
        it('Navegar Diretamente Para Nossos Cursos', () => {
            cy.navegarURLNossosCursos()
        });
    })

    context('Navegar Para Nossos Cursos Com Validacao De Erro/Falha', () => {
        it('Validar Erro De Texto ', () => {
            cy.navegarURLNossosCursosFalha()
        });
    })
});