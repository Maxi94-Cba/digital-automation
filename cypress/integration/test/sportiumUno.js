import { HeaderPage } from "../pages/header";
import { UtilitiesPage } from "../pages/utilities";
import { SportiumUnoPage } from "../pages/sportiumUno";
import { SportiumUnoController } from "../controllers/sportiumUno";

const Header = new HeaderPage();
const Utilities = new UtilitiesPage();
const Uno = new SportiumUnoPage();
const UnoController = new SportiumUnoController();

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

  context("Transfers - Online to Shops", function () {
    Utilities.ignoreSiteErrors();

    before(function () {
      Uno.goToSportiumUno();
      Header.logIn("Maxi333", "Test.333");
    });
    beforeEach(function () {
      Utilities.ignoreSiteErrors();
    });

    it("Check transfer mode", function () {
      UnoController.checkTransferMode("ONLINE", "TIENDAS");
    });
    it("Check minimum ammount allowed", function () {
      UnoController.deleteAmmount();
      UnoController.setAmmount(1);
      UnoController.sliderValueShouldHave('10 €');
    });
    it("Check maximum ammount allowed", function () {
      UnoController.deleteAmmount();
      UnoController.setAmmount(700);
      UnoController.sliderValueShouldHave('100 €');
    });
    it("Send minimun transfer", function () {
      UnoController.deleteAmmount();
      UnoController.setAmmount(10);
      UnoController.sliderValueShouldHave('10 €');
      UnoController.clickTransfer();
      UnoController.confirmTransfer();
      UnoController.checkTransfer();
    });

    after(function(){
      Header.getDepositar().click();
      Header.btnCancelarSolitud().click()
      Header.logOut();
    });
  });

  context("Transfers - Shops to Online", function () {
    Utilities.ignoreSiteErrors();

    before(function () {
      Uno.goToSportiumUno();
      Header.logIn("Maxi333", "Test.333");
    });

    beforeEach(function () {
      Utilities.ignoreSiteErrors();
    });

    it("Check transfer mode", function () {
      cy.wait(5000);
      UnoController.switchTransferMode();
      UnoController.checkTransferMode("TIENDAS", "ONLINE");
    });
    it("Check minimum ammount allowed", function () {
      UnoController.deleteAmmount();
      UnoController.setAmmount(0);
      UnoController.sliderValueShouldHave('0.01 €');
    });
    it("Check maximum ammount allowed", function () {
      UnoController.deleteAmmount();
      UnoController.setAmmount(700);
      UnoController.sliderValueShouldHave('200 €'); //Cambiar por 500 €
    });
    it("Check transfer error", function () {
      UnoController.deleteAmmount();
      UnoController.setAmmount(0.01);
      UnoController.sliderValueShouldHave('0.01 €');
      UnoController.clickTransfer();
      UnoController.confirmTransfer();
      UnoController.checkErrorMsg();
    });

    after(function(){
      Header.logOut();
    });
  });
});
