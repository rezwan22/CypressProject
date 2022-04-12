///<reference types="cypress"/>


it('google test', function() {

    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')

    cy.contains('Videos').click()

    // cy.get('.l').contains('Training by Raghav').click()

})

it.only('login test', function(){
    //To visit the URL
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    //To login using valid credential
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('.button').click()

    //Admin
    cy.get('.main-menu-first-level-list-item').contains('Admin').click()

    //Mouse hover on User Management >> Click Users
    cy.get('.selected').contains('User Management').trigger('mouseover', {force:true})
    cy.get('.selected').contains('Users').click({force:true})

    //Add user & click Save
    cy.get('.inner').find('#btnAdd').click()
    cy.get('.inner').find('#btnSave').click()

})