describe('Get commande', () =>{

    it('Recherche un élément by tag name', () => {

        cy.visit('cypress/index.html');
        cy.get('h1'); // get avec le DOM
    })

    it('Recherche un élément by id', () => {

        cy.visit('cypress/index.html');
        cy.get('#Nuts'); //get avec l'id 
    })

    it('Recherche un élément by class', () => {

        cy.visit('cypress/index.html');
        cy.get('.pricing-header'); // get avec la class 
        cy.get('.country-list')
        cy.get('.list11').parents();
    })

    it('its command', () => {

        cy.visit('cypress/index.html');
        cy.get('ul').find('li').its('length').should('eq',23);
    })

    it('avoir le 3ème elem de  ma liste', () => {

        cy.visit('cypress/index.html');
        cy.get('ul').find('li').eq(3);

    })

    it('Filter command', () => {

        cy.visit('cypress/index.html');
        cy.get('li').filter('.web');

        
    })

    it('first command', () => {

        cy.visit('cypress/index.html');
        cy.get('li').parent().first();

        
    })

    it('Childrens command', () => {

        cy.visit('cypress/index.html');
        cy.get('ul').children().eq(2).should('have.class','list3');


        
    })

    it('get an element by text', () => {

        cy.visit('cypress/index.html');
        cy.contains('Appium');    

        
    })


    it('get button', () => {

        cy.visit('cypress/index.html');
        cy.get('.hidden-button').click({ force: true });        

        
    })

    it('type', () => {

        cy.visit('cypress/index.html');
        cy.get('#coverdInput').type('test', {force:true});
        
    })

    it.skip('typecommands', () => {

        cy.visit('cypress/index.html');
        cy.get('#inputEmail').type('monemail@gmail.com{enter}' );
       // cy.get('#inputPassword').type('monpassword');
       // cy.get('#login').click();
        
    })

    it.only('select commands', () => {

        cy.visit('cypress/index.html');
        cy.get('#courses').select('appium');
        
    })








   

    





})