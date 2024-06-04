describe('La suite de test ' , () => {
    
    // Le before c'est un hook qui sera exécuter  avant le premier scenario de test    
    before(() => {
         cy.log('je suis dans le Before')
    }) ;
   
    // Le beforeEach  c'est un hook qui sera exécuter  avant chaque  scenario de test    
 
    beforeEach(() => {
 
        cy.log('je suis dans le BeforeEach ')
 
    })
 
    after(() => {
        cy.log('Je suis dans le after') ;
    })
 
    afterEach(() => {
        cy.log('je suis dans le afterEach')
    })
 
 
    it('Premier scenario de test ' , () => {
 
       cy.log('Hello World ')  ;
       
 
    })
 
    it('second scenario de test ' , () => {
 
        cy.log('Hello World ') ;
 
 
    });
 
    it('3ém scénario de test ' , () => {
     
        cy.log('Hello World ')
 
 
    })
 
   
})
