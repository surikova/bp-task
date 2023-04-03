

export class ConstructionYearPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-100%')
    }

    typeConstructionYear(year){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.get('input').type(year)
    }

}

export const onConstructionYearPage = new ConstructionYearPage()