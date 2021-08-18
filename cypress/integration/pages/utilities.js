/// <reference types="cypress" />

export class UtilitiesPage {
  ignoreSiteErrors() {
    // Ignore errors from the site itself
    Cypress.on("uncaught:exception", () => {
      return false;
    });
  }
  /*
  loadFixture(){
    let testData;
    cy.fixture("testData").then(function (data) {
      testData = data;
    });
  }*/
}
