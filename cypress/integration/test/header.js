import { HeaderPage } from "../pages/header";
import { UtilitiesPage } from "../pages/utilities";
import { getData } from '../../fixtures/testDataManager';

const Header = new HeaderPage();
const Utilities = new UtilitiesPage();
let testData;

describe("Test Suite - Header", function () {
  Utilities.ignoreSiteErrors();

  //before(function () {});

  beforeEach(function () {
    cy.fixture("testData").then(function (data) {
      testData = data;
    });
    Header.goToSportium();

  });

  it("Login correctly", function () {
    Header.getIniciarSesion().should('be.visible').click();
    Header.getUsername().type(testData.user333).should('have.value', testData.user333);
    Header.getPassword().type(testData.pass333).should('have.value', testData.pass333);
    //Header.getUsername().type(getData.USER_222).should('have.value', getData.USER_222);
    //Header.getPassword().type(getData.USER_333.PASS).should('have.value', getData.USER_333.PASS);
    Header.getAcceder().should('be.visible').click();
    Header.getLoginAccept().should('be.visible').click();
    Header.getCookiesAccept().should('be.visible').click();
  });
});