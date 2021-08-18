/// <reference types="cypress" />

export class HeaderPage {
  goToSportium() {
    return cy.visit("https://portal-admin.sportium.es/");
  }
  getIniciarSesion() {
    return cy.get(".main-header__icon--login > .btn", { timeout: 20000 });
    //button[contains(@class,'btn btn_action_login btn_size_small fn-login')] este es el xpath de tu botón de iniciar sesión
  }
  getAcceder() {
    return cy.get(".form > .login-form__actions > .btn");
  }
  getUsername() {
    return cy.get(".fn-user-name");
  }
  getPassword() {
    return cy.get(".fn-input-type-password");
  }
  getLoginAccept() {
    return cy.get('.popup-modal__button', { timeout: 20000 });
  }
  getCookiesAccept() {
    return cy.get(':nth-child(3) > .btn', { timeout: 20000 });
  }
  getUserBalance() {
    return cy.get('.val_type_user_balance');
    ;
  }
}
