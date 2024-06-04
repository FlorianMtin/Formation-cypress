/// <reference types= "cypress" />
describe('get url', () =>{

        
    it('Check URL', () => {
        //check de l'url
        cy.visit('cypress/index.html');
        cy.url().should('contain','51622');
        // check onglet 
        cy.title().should('contain','Cypress Tutorials');
        
    })

   
    
    
})

    




            

