import tryApi from "../API/apiTest"
import loginPage from "../POM/loginPage";
describe('Suite de test Request',  () =>{

    const myApi = new tryApi();
    const myloginPage = new loginPage();

    beforeEach(() => {
        myloginPage.visit();
        cy.fixture('validUser').as('User');
    })


    it('HTTP Request saved in the as Alias', () => {


        cy.get('@User').then((user) => {
            myloginPage.login(user.username, user.password);  // Fait appel à la fonction loginPage
          })
        
        myApi.tryApi().then(({body}) => {
            console.log(body.data);
            expect(body.data[3].count).to.be.eq(1);
            expect(body.data).to.have.length(4);
            expect(typeof(body.data[1])).to.be.eq("object");       
     })



})
})
       
