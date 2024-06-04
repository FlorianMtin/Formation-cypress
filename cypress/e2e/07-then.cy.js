describe('Suite de test Then', () =>{

    it('Then commands', () => {
   
        cy.visit('cypress/index.html');
        //cy.get('#welcome').invoke('text').should('ed','Welcome to Cypress Tutorials'); // Le get permet de retourner la baliste html, avec le invoke on récupère que le texte
        cy.get('#welcome').invoke('text').then((texte) =>  {
            expect(texte).to.be.eq('Welcome to Cypress Tutorials');
        });
    })

})