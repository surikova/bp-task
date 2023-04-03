/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to open the hint during the sign up process
       */
      openHint(): Chainable<Element>

        /**
       * Custom command to close the hint during the sign up process
       */
            closeHint(): Chainable<Element>

        /**
       * Custom command to close the hint during the sign up process
       */
            clickNextButton(): Chainable<Element>
    }
  }