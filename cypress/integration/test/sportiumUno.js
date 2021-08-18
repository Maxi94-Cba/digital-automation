import { HeaderPage } from "../pages/header";
import { UtilitiesPage } from "../pages/utilities";
import { SportiumUnoPage } from "../pages/sportiumUno";

const Header = new HeaderPage();
const Utilities = new UtilitiesPage();
const Uno = new SportiumUnoPage();

describe("Sportium UNO", function () {
  //before(function () {});
/*
  context("Navegability (Unlogged)", function () {
    beforeEach(function () {
      Utilities.ignoreSiteErrors();
      Uno.goToSportiumUno();
    });

    it("Check 'Comprueba Ahora' button", function () {
      Uno.btnCompruebaAhora().click();
      cy.url().should("include", "/bet-history");
    });

    it("Check 'Busca tu tienda' button", function () {
      Uno.btnBuscaTuTienda().click();
      cy.url().should("include", "tiendas");
    });

    it("Check first question", function () {
      Uno.listQuestion1().click();
    });
  });
  
  context("Navegability (Logged)", function () {
    beforeEach(function () {
      Utilities.ignoreSiteErrors();
      Uno.goToSportiumUno();
      Header.getIniciarSesion().should('be.visible').click();
      Header.getUsername().type("Maxi333").should('have.value', "Maxi333");
      Header.getPassword().type("Test.333").should('have.value', "Test.333");
      Header.getAcceder().should('be.visible').click();
      Header.getLoginAccept().should('be.visible').click();
      //Header.getCookiesAccept().should('be.visible').click();
    });

    it("Check 'Comprueba Ahora' button", function () {
      Uno.btnCompruebaAhora().click();
      cy.url().should("include", "/bet-history");
    });

    it("Check 'Busca tu tienda' button", function () {
      Uno.btnBuscaTuTienda().click();
      cy.url().should("include", "tiendas");
    });
  });
*/
  context("Transfers", function () {
    beforeEach(function () {
      Utilities.ignoreSiteErrors();
      Uno.goToSportiumUno();
      Header.getIniciarSesion().should('be.visible').click();
      Header.getUsername().type("Maxi333").should('have.value', "Maxi333");
      Header.getPassword().type("Test.333").should('have.value', "Test.333");
      Header.getAcceder().should('be.visible').click();
      Header.getLoginAccept().should('be.visible').click();
      //Header.getCookiesAccept().should('be.visible').click();
    });

    it("Check 'Comprueba Ahora' button", function () {
      Uno.btnCompruebaAhora().click();
      cy.url().should("include", "/bet-history");
    });

    it("Check 'Busca tu tienda' button", function () {
      Uno.btnBuscaTuTienda().click();
      cy.url().should("include", "tiendas");
    });
  });
});
