class ApiTesteur{

    tryApi(){
        return cy.api({
                method : 'GET',
                url : '/web/index.php/api/v2/dashboard/employees/subunit',
    
        })
      
    
    }



}
export default ApiTesteur;
