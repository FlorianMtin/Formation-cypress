describe('Suite de test Fixture',  () =>{

    beforeEach(() => {
        cy.fixture('validUser').as('login'); // as pour dire que c'est un alias, on stock l'objet
        cy.visit('/');         
    })



    it('Fixture Read', async () => {
        cy.get('@login').then((user) => {   // on récupère l'alias avec un get(@name)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);
            })
        cy.get('.oxd-button').click();
        
        })
    
        
       

    
   
    
    
})