

export class RoofShapePage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-71.4286%')
    }

    selectRoofShape(roofShape){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.contains(roofShape).click()
    }

}

export const onRoofShapePage = new RoofShapePage()