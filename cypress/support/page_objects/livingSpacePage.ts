

export class LivingSpacePage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-92.8571%')
    }

    typeLivingSpaceArea(squareMeters){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.get('input').type(squareMeters)
    }

}

export const onLivingSpacePage = new LivingSpacePage()