

export class ZipCodePage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-14.2857%')
    }

    typeZipCode(zipCode){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.get('input').type(zipCode)
    }

}

export const onZipCodePage = new ZipCodePage()