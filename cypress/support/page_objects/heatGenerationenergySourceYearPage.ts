

export class HeatGenerationenergySourceYearPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-21.4286%')
    }

    typeHeatGenerationYear(year){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.get('input').type(year)
    }

}

export const onHeatGenerationenergySourceYearPage = new HeatGenerationenergySourceYearPage()