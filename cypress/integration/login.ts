import { LoginPage } from "../pages/login_page"

beforeEach(()=>{
    cy.log('I am running from outside describe block.')
})

describe('all login tests', function () {

    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.navigate('https://trytestingthis.netlify.app/');
    })

    it.only('login with valid credentials', function () {

        loginPage.enterUsername('test');
        loginPage.enterPassword('test');
        loginPage.clickLogin();

        cy.contains('Login Successful')
        //cy.contains('here').click()
        cy.clickLink('here')
        ///
    })

    it('login with invalid username', function () {

        loginPage.enterUsername('test123');
        loginPage.enterPassword('test');
        loginPage.clickLogin();
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })

    })

    it('login with invalid password', function () {
        loginPage.enterUsername('test');
        loginPage.enterPassword('test456');
        loginPage.clickLogin();
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(6) > :nth-child(5)').click();
        cy.get('[ondblclick="myFunction()"]').click();
        cy.get('[ondblclick="myFunction()"]').click();
        cy.get('form > fieldset').click();
        cy.get(':nth-child(35)').click();
        cy.get('[name="option1"]').check();
        cy.get(':nth-child(38)').click();
        cy.get('[name="option1"]').uncheck();
        cy.get(':nth-child(41)').click();
        cy.get('[name="option1"]').check();
        cy.get('#owc').select(['option 2']);
        cy.get('#owc').select(['option 1']);
        cy.get('.pop-up-alert').click();
        cy.get('.pop-up-alert > button').click();
        /* ==== End Cypress Studio ==== */
    })

})
