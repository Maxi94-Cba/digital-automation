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
  getBonusAccept(){
    return cy.get('.popup-modal__buttons > .Button__success--39j');
  }
  getUserBalance() {
    return cy.get('.val_type_user_balance');
  }
  getDepositar(){
    return cy.get('.main-header__icon--deposit > .fn-replacer > .btn');
  }
  btnCancelarSolitud(){
    //Dentro de la pagina Depositar
    return cy.get(':nth-child(1) > .retiro-btn > .form > .form__actions > .btn');
  }
  getCerrarSesion(){
    return cy.get('.main-header__icon--logout > .fn-replacer > .btn');
  }
  getDesconectar(){
    //return cy.get('.popup-modal__buttons > .Button__success--39j', { timeout: 10000 });
    return cy.get('.Button__success--39j');
  }
  getDesconectarTitle(){
    return cy.get('.popup-modal__title');
  }
  getDesconectarAccept(){
    return cy.get('.popup-modal__button');
  }

  logIn(user, pass){
    this.getIniciarSesion().should('be.visible').click();
    this.getUsername().type(user).should('have.value', user);
    this.getPassword().type(pass).should('have.value', pass);
    this.getAcceder().should('be.visible').click();
    this.getLoginAccept().should('be.visible').click();
    //this.getBonusAccept().should('be.visible').click();
    //this.getCookiesAccept().should('be.visible').click();
  }
  logOut(){
    this.getCerrarSesion().click();
    this.getDesconectar().click();
    //this.getDesconectarTitle().should('have.text', 'Sesión Finalizada');
    this.getDesconectarAccept().click();
  }
}
