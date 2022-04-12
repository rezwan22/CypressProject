it('google test', function(){

cy.visit('https://www.google.com/')

cy.get('[name="q"]')
    .type('Automation step by step{enter}')

})