/// <reference types="cypress" />
import { SportiumUnoPage } from "../pages/sportiumUno";
const Uno = new SportiumUnoPage();

export class SportiumUnoController {

  switchTransferMode(){
    Uno.btnSwitch().click();
  }
  deleteAmmount(){
    cy.wait(500);
    Uno.inputAmmount().type('5').clear();
  }
  setAmmount(value){
    Uno.inputAmmount().type(value).blur();
  }
  checkTransferMode(textFrom, textTo){
    Uno.titleFrom().should('have.text', textFrom);
    Uno.titleTo().should('have.text', textTo);
  }
  sliderValueShouldHave(text) {
    //Importe actual (debajo de la bolita), valor identico a inputAmmount
    Uno.sliderCurrentValue().should('have.text', text);
  }
  clickTransfer(){
    Uno.btnTransfer().click();
  }
  cancelTransfer(){
    Uno.btnTransferCancel().click();
  }
  confirmTransfer(){
    Uno.btnTransferAccept().click();
  }
  checkTransfer(){
    Uno.msgTransfer().should('have.text', 'Transferencia realizada correctamente');
  }
  checkErrorMsg(){
    Uno.msgTransfer().should('have.text', 'Lo sentimos pero la transferencia no se ha podido realizar');
  }

  //  .invoke('text')  for input or textarea, .invoke('val')
  balanceFrom() {
    return cy.get('#sp-uno-transfer-available-amount-from');
  }
  balanceTo() {
    return cy.get('#sp-uno-transfer-available-amount-to');
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



  clickCompruebaAhora(){
    Uno.btnCompruebaAhora().click();
  }
  clickBuscaTuTienda(){
    Uno.btnBuscaTuTienda().click();
  }
  openQuestion1(){
    Uno.listQuestion1().click();
  }
  openQuestion2(){
    Uno.listQuestion2().click();
  }
  openQuestion3(){
    Uno.listQuestion3().click();
  }
  openQuestion4(){
    Uno.listQuestion4().click();
  }
}
