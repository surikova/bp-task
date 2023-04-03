

export class NumberOfFloorsPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-85.7143%')
    }

    typeNumberOfFloors(floors){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.get('input').type(floors)
    }

}

export const onNumberOfFloorsPage = new NumberOfFloorsPage()