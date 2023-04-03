

export class BasementHeatedPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-42.8571%')
    }

    selectBasementHeating(selection){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.contains(selection).click()
    }

}

export const onBasementHeatedPage = new BasementHeatedPage()