/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

import { onBasementHeatedPage } from "../support/page_objects/basementHeatedPage"
import { onBasementPage } from "../support/page_objects/basementPage"
import { onBuildingAtticHeatedPage } from "../support/page_objects/buildingAtticHeatedPage"
import { onBuildingAtticPage } from "../support/page_objects/buildingAtticPage"
import { onBuildingSituationPage } from "../support/page_objects/buildingSituationPage"
import { onConstructionYearPage } from "../support/page_objects/constructionYearPage"
import { onHeatGenerationEnergySourcePage } from "../support/page_objects/heatGenerationEnergySourcePage"
import { onHeatGenerationenergySourceYearPage } from "../support/page_objects/heatGenerationenergySourceYearPage"
import { onLivingSpacePage } from "../support/page_objects/livingSpacePage"
import { onNumberOfFloorsPage } from "../support/page_objects/numberOfFloorsPage"
import { inPrivacySettinsPopup } from "../support/page_objects/privacySettingsPopup"
import { onRenovationYearPage } from "../support/page_objects/renovationYearPage"
import { onRoofShapePage } from "../support/page_objects/roofShapePage"
import { onSignUpPage } from "../support/page_objects/signUpPage"
import { onZipCodePage } from "../support/page_objects/zipCodePage"

describe('Sign up flow', () => {

    before('Open welcome page', () => {
        cy.visit(Cypress.env('signup_url'))
    })

    it('verifies successful sign up when data entered correctly', () => {
        inPrivacySettinsPopup.acceptAllSettings()

        onConstructionYearPage.checkProgressBar()
        cy.openHint()
        cy.closeHint()
        onConstructionYearPage.typeConstructionYear(1980)
        cy.clickNextButton()
        cy.url().should('contain', 'living-space-step')

        onLivingSpacePage.checkProgressBar()
        cy.openHint()
        cy.closeHint()
        onLivingSpacePage.typeLivingSpaceArea(120)
        cy.clickNextButton()
        cy.url().should('contain', 'number-of-full-floors-step')

        onNumberOfFloorsPage.checkProgressBar()
        cy.openHint()
        cy.closeHint()
        onNumberOfFloorsPage.typeNumberOfFloors(3)
        cy.clickNextButton()
        cy.url().should('contain', 'building-situation-step')

        onBuildingSituationPage.checkProgressBar()
        cy.openHint()
        cy.closeHint()
        onBuildingSituationPage.selectBuilding('freistehend')
        cy.clickNextButton()
        cy.url().should('contain', 'roof-shape-step')

        onRoofShapePage.checkProgressBar()
        onRoofShapePage.selectRoofShape('Satteldach')
        cy.clickNextButton()
        cy.url().should('contain', 'building-attic-step')

        onBuildingAtticPage.checkProgressBar()
        cy.openHint()
        cy.closeHint()
        onBuildingAtticPage.selectBuildingAttic('Ja')
        cy.clickNextButton()
        cy.url().should('contain', 'building-attic-heated-step')

        onBuildingAtticHeatedPage.checkProgressBar()
        onBuildingAtticHeatedPage.selectBuildingAtticHeating('Ja')
        cy.clickNextButton()
        cy.url().should('contain', 'basement-step')

        onBasementPage.checkProgressBar()
        onBasementPage.selectBasement('Ja')
        cy.clickNextButton()
        cy.url().should('contain', 'basement-heated-step')

        onBasementHeatedPage.checkProgressBar()
        onBasementHeatedPage.selectBasementHeating('Ja')
        cy.clickNextButton()
        cy.url().should('contain', 'renovation-year-step')

        onRenovationYearPage.checkProgressBar()
        onRenovationYearPage.selectRenovatedParts(["Außenwand", "Fenster", "Haustür"])
        cy.clickNextButton()
        cy.url().should('contain', 'heat-generation-energy-source-step')

        onHeatGenerationEnergySourcePage.checkProgressBar()
        onHeatGenerationEnergySourcePage.selectHeatEnergySource('Ölheizung')
        cy.clickNextButton()
        cy.url().should('contain', 'heat-generation-energy-source-year-step')

        onHeatGenerationenergySourceYearPage.checkProgressBar()
        onHeatGenerationenergySourceYearPage.typeHeatGenerationYear(1990)
        cy.clickNextButton()
        cy.url().should('contain', 'zip-code-step')

        onZipCodePage.checkProgressBar()
        onZipCodePage.typeZipCode(14770)
        cy.clickNextButton()
        cy.url().should('contain', 'signup-step')

        let name = faker.name.firstName()
        let surname = faker.name.lastName()
        let email = faker.internet.exampleEmail()
        let tel = faker.phone.number('##########')

        onSignUpPage.checkProgressBar()
        onSignUpPage.typeName(name)
        onSignUpPage.typeSurname(surname)
        onSignUpPage.typeEmail(email)
        onSignUpPage.typeTel(tel)
        onSignUpPage.acceptTermsAndConditions()
        cy.contains('Ergebnis anzeigen').click()
        cy.get('.css-1qm1lh', { timeout: 20000 }).should('contain', name)

    })
})