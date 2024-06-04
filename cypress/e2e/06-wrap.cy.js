describe('Suite de test Wrap', () =>{

        
    it.skip('Premier test', () => {
        cy.visit('cypress/index.html');


        const eleve = {
            Prenom : 'Florian',
            Nom : 'Martin',
            Age : 20,
            adresse : '48 rue de test Paris',
            isQA : true,
            isWatchingMovie :function(){ 
                return console.log('Hello Florian Cypress is amazing');
            }

        }

        cy.wrap(eleve).should('have.a.property','Nom','Martin').its('length').should('eq',6); 
        cy.wrap(eleve).invoke('isWatchingMovie').should('match','Florian');

    })


    it('Test Wrap animal', () => {
        cy.visit('cypress/index.html');


        const animal = {
            Prenom : 'Benjo',
            Age : 4,
            Taille : '35 CM',
            isFriendly : true,
            isHungry :function(){ 
                return('Benjo a faim!');
            }

        }

        cy.wrap(animal).should('have.a.property','Taille','35 CM').its('length').should('eq',5);
        cy.wrap(animal).invoke('isHungry').should('contain','Benjo');
        

    })

   
    
    
})