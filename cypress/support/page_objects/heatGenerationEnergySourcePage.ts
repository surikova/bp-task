

export class HeatGenerationEnergySourcePage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-28.5714%')
    }

    selectHeatEnergySource(selection){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.contains(selection).click()
    }

}

export const onHeatGenerationEnergySourcePage = new HeatGenerationEnergySourcePage()