/// <reference types="cypress-downloadfile"/>

describe('file download test', () => {

    it('file download demo', () => {

        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','sample.jpg')
    })

})