class loginPage{


    get inputUsername() {
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    get inputPassword() {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    get submitButton() {
        return cy.get('.oxd-button');
    }

    visit = () => {
        cy.visit('/');
    }

    login = (username,password) => {
        //On appelle les différentes fonctions
        this.inputUsername.type(username);
        this.inputPassword.type(password);
        this.submitButton.click();
    }


}




export default loginPage;