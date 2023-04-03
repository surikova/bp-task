

export class BuildingAtticHeatedPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-57.1429%')
    }

    selectBuildingAtticHeating(yesOrNo){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.contains(yesOrNo).click()
    }

}

export const onBuildingAtticHeatedPage = new BuildingAtticHeatedPage()