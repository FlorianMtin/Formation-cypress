describe('Suite de test Request',  () =>{

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('validUser').as('User');
    })



    it.skip('Http request', async () => {

        cy.get('@User').then((user) => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);  
            cy.get('.oxd-button').click();
          })

        cy.request({
            method : 'GET',
            url : '/web/index.php/api/v2/dashboard/employees/locations',

        })
                       
              })


    it('HTTP Request saved in the as Alias', () => {
        cy.get('@User').then((user) => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);  
            cy.get('.oxd-button').click();
          })
        
        cy.api({
            method : 'GET',
            url : '/web/index.php/api/v2/dashboard/employees/subunit',

        }).as('endPoint');

        cy.get('@endPoint').then(({body}) => {
            console.log(body.data);
            expect(body.data[3].count).to.be.eq(1);
            expect(body.data).to.have.length(4);
            expect(typeof(body.data[1])).to.be.eq("object");         

        
        })



})
})
       
