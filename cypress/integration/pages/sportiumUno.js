/// <reference types="cypress" />

export class SportiumUnoPage {
  goToSportiumUno() {
    return cy.visit("https://portal-admin.sportium.es/new-sportium-uno", { timeout: 20000 });
  }

  btnSwitch() {
    //Switch button
    return cy.get('#sp-uno-transfer-switch-img', { timeout: 20000 });
  }
  titleFrom() {
    return cy.get('#sp-uno-transfer-title-from', { timeout: 20000 });
  }
  titleTo() {
    return cy.get('#sp-uno-transfer-title-to');
  }
  balanceFrom() {
    return cy.get('#sp-uno-transfer-available-amount-from');
  }
  balanceTo() {
    return cy.get('#sp-uno-transfer-available-amount-to');
  }
  inputAmmount() {
    //Importe a transferir textbox
    return cy.get('#sp-uno-transfer-amount');
  }
  btnTransfer() {
    //Transferir button
    return cy.get('#button-transfer');
  }

  sliderBall() {
    //Bolita del slider
    return cy.get('.rangeslider__handle');
  }
  sliderMinValue() {
    //Importe minimo del slider
    return cy.get('#sp-uno-transfer-min-value');
  }
  sliderMaxValue() {
    //Importe maximo del slider
    return cy.get('#sp-uno-transfer-max-value');
  }
  sliderCurrentValue() {
    //Importe actual (debajo de la bolita), valor identico a inputAmmount
    return cy.get('output');
  }
  btnTransferAccept(){
    return cy.get('#button-transfer-accept');
  }
  btnTransferCancel(){
    return cy.get('.button-transfer-later');
  }
  warningTransferAccept(){
    return cy.get('#sp-uno-transfer-warning-questions'); //¿Estás seguro de querer hacer esta opecación?
  }
  msgTransfer(){
    return cy.get('#sp-uno-transfer-info-text'); //Transferencia realizada correctamente
  }



  btnCompruebaAhora() {
    return cy.get('.check-bet-button > button', { timeout: 20000 });
  }
  btnBuscaTuTienda() {
    return cy.get('.find-shop-button > button', { timeout: 20000 });
  }
  listQuestion1() {
    return cy.get(':nth-child(1) > .faqs-question-title', { timeout: 10000 });
  }
  listQuestion2() {
    return cy.get(':nth-child(2) > .faqs-question-title', { timeout: 10000 });
  }
  listQuestion3() {
    return cy.get(':nth-child(3) > .faqs-question-title', { timeout: 10000 });
  }
  listQuestion4() {
    return cy.get(':nth-child(4) > .faqs-question-title', { timeout: 10000 });
  }
}
