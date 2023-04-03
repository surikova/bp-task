

export class PrivacySettinsPopup{

    acceptAllSettings(){
        cy.get('#usercentrics-root')
        .shadow().find('[data-testid="uc-accept-all-button"]').click()
    }

}

export const inPrivacySettinsPopup = new PrivacySettinsPopup()