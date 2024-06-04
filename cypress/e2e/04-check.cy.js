/// <reference types= "cypress" />
describe('get commande suite', () =>{

        
    it.skip('Check commande', () => {
        //check des boutons
        cy.visit('cypress/index.html');
        cy.get('#Fries').check();
        cy.get('#Fries').uncheck();
        cy.get('#Tester').check();       

    })

    it.skip('Right and double click', () => {

        cy.visit('cypress/index.html');
        cy.get('[value="Click me"]').dblclick(); // on récupère la value dans value: 
        //double click
        //cy.get('#click').dblclick(); 
        //click droit
        cy.get('#click').rightclick();
    
    
    
})

    
it.skip('Assertion commande', () => {
    //check des boutons
    cy.visit('cypress/index.html');
    cy.get('[value="Download Invoice"]').eq(1).should('be.visible'); //assertion visible
    cy.get('[value="Download Invoice"]').eq(2).should('have.class','invoice-button');
    cy.get('[value="Download Invoice"]').eq(0).should('be.visible'); // EQ permet de récupérer si un get retourne une liste le numéro de la liste 


})



            


})