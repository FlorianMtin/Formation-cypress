describe('Suite de test Fixture',  () =>{

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('validUser').then((user) => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);
            cy.get('.oxd-button').click();
            cy.url().should('contain','/dashboard/index');
 
    })
})
        
    it.skip('Fixture Commande', async () => {
        
        cy.fixture('example').as('usersJson');
        cy.readFile('cypress/fixtures/example.json');
        cy.writeFile('cypress/fixtures/example2.json',{mdp: "Azerty123", email:'monemail@gmail.com'});
        cy.readFile('cypress/fixtures/example2.json');
        })

    it('Fixture Read', async () => {
        cy.visit('/');
        cy.fixture('validUser').then((user) => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);
            cy.get('.oxd-button').click();
            cy.url().should('contain','/dashboard/index');
        })
        })
    
        
       

    
   
    
    
})