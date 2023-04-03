

export class SignUpPage{

    checkProgressBar(){
        cy.get('.css-1u0su7y').invoke('attr', 'style').should('include', '-7.14286%')
    }

    typeSurname(surname){
        cy.get('[autocomplete="family-name"]').type(surname)
    }

    typeName(name){
        cy.get('[autocomplete="given-name"]').type(name)
    }

    typeEmail(email){
        cy.get('[autocomplete="email"]').type(email)
    }

    typeTel(tel){
        cy.get('[autocomplete="tel"]').type(tel)
    }

    acceptTermsAndConditions(){
        cy.get('[type="checkbox"]').click()
    }

}

export const onSignUpPage = new SignUpPage()