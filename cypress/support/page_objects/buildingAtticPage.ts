

export class BuildingAtticPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-64.2857%')
    }

    selectBuildingAttic(yesOrNo){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.contains(yesOrNo).click()
    }

}

export const onBuildingAtticPage = new BuildingAtticPage()