

export class BuildingSituationPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-78.5714%')
    }

    selectBuilding(situation){
        cy.contains('Weiter')
            .should('be.disabled')
        cy.contains(situation).click()
    }

}

export const onBuildingSituationPage = new BuildingSituationPage()