describe('Validar Cadastro Com Sucesso', () => {

    context('Realizar Cadastro Com Sucesso', () => {
        it('Preencher todos Os Campos De Cadastro', () => {
            cy.cadastrarUsuarioComSucesso()
        });
    })
});