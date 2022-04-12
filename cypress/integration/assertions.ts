
it('learning assertions', function(){

    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    cy.get('#query-btn', {timeout: 6000})
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')

    cy.get('#query-btn', {timeout: 6000})
    .invoke('attr', 'id')
    .should('equal', 'query-btn')

    cy.get('#query-btn', {timeout: 6000})
    .should('contain', 'Button')
    .and('have.class', 'query-btn')

    //Explicit assertions
    //expect

    expect(true).to.be.true

    let name = 'Rezwan'
    expect(name).to.be.equal('Rezwan')

    //assert

    assert.equal(4, 4, 'Not equal')
    assert.strictEqual(4, 4, 'Not strictly equal')

})