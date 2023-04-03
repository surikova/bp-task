

export class RenovationYearPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-35.7143%')
    }

    selectRenovatedParts(parts:string[]){
        /** Next button is not disabled in this step  
         * cy.contains('Weiter') 
             .should('be.disabled')  */
        for (let part of parts) {
            cy.contains(part).click()
        }
        
    }

}

export const onRenovationYearPage = new RenovationYearPage()