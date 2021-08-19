/// <reference types="cypress" />
import { SportiumUnoPage } from "../pages/sportiumUno";
const Uno = new SportiumUnoPage();

export class SportiumUnoController {
  switchMode(){
    Uno.btnSwitch().click();
  }
  setAmmount(value){
    Uno.inputAmmount().type(value);
  }


  //
  titleFrom() {
    //Transferir desde -Default: ONLINE
    return cy.get('#sp-uno-transfer-title-from');
  }
  titleTo() {
    //Transferir hacia -Default: TIENDAS
    return cy.get('#sp-uno-transfer-title-to');
  }
  balanceFrom() {
    return cy.get('#sp-uno-transfer-available-amount-from');
  }
  balanceTo() {
    return cy.get('#sp-uno-transfer-available-amount-to');
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
