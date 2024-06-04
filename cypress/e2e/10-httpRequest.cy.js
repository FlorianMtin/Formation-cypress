describe('Suite de test API',  () =>{

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('validUser').as('User');
    })



    it('Http request', async () => {
    
    cy.intercept('/web/index.php/api/v2/dashboard/employees/action-summary').as('api');
      cy.get('@User').then((user) => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);  
        cy.get('.oxd-button').click();
      })

      cy.wait('@api').then((api) => {

        expect(api.response.statusCode).eql(200);
        expect(api.response.statusMessage).to.be.eql('OK');
        expect(Number.isInteger(api.response.statusCode)).to.eq(true);
      })
    })

      it('Http request2', async () => {
    
        cy.intercept('/web/index.php/api/v2/dashboard/employees/locations').as('api');
          cy.get('@User').then((user) => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);  
            cy.get('.oxd-button').click();
          })    
          cy.wait('@api').then((api) => {
            cy.log(api);
            expect(api.routeId).to.be.a('string');
            expect(api.response.headers.server).to.be.eq('nginx');


        
          })
    
            
          })


          it.only('Http request3', async () => {
    
            cy.intercept('/web/index.php/api/v2/dashboard/employees/locations').as('api');
              cy.get('@User').then((user) => {
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);  
                cy.get('.oxd-button').click();
              })    
              cy.wait('@api').then(({response}) => {
                cy.log(response);
                //expect(body).to.be.a('string');                        
              
              })
        
                
              })
        
    
    
    })
       
