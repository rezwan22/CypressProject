describe('cypress studio demo', () => {
    it('login test', () => {
        
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('My first recorder test', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/index.html');
        cy.get('#fname').clear();
        cy.get('#fname').type('Rezwan');
        cy.get('#lname').clear();
        cy.get('#lname').type('Islam');
        cy.get('#male').check();
        cy.get('#option').select('option 1');
        cy.get('#owc').select(['option 1']);
        cy.get(':nth-child(38)').click();
        cy.get('[name="option1"]').check();
        cy.get('#a').click();
        cy.get('#day').click();
        cy.get('#day').click();
        cy.get('form > fieldset').click();
        cy.get('#uname').clear();
        cy.get('#uname').type('test');
        cy.get('.login').click();
        cy.get('#pwd').clear();
        cy.get('#pwd').type('test');
        cy.get('.login').click();
        cy.get('[type="submit"]').click();
        cy.get('.header').click();
        cy.get('.header').click();
        /* ==== End Cypress Studio ==== */
    });
})