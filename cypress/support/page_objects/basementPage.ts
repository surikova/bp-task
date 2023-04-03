

export class BasementPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-50%')
    }

    selectBasement(yesOrNo){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.contains(yesOrNo).click()
    }

}

export const onBasementPage = new BasementPage()