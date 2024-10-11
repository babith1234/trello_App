require('dotenv').config();
describe('Demo API Test', () => {
    const baseURL =  process.env.API_BASE;
    const apiKey = process.env.API_KEY;
    const apiToken =process.env.API_TOKEN;
    let id;
    it('Create a Board', () => {
        cy.request({
            method:"POST",
            url:baseURL+"/1/boards",
            qs:{
                name:"First Board",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            id = res.id;
            cy.log(res);
        })
        cy.log("Board Created")
    });

    it('Getting Detials of Boards', () => {
        cy.request({
            method:"GET",
            url:baseURL+"/1/boards/"+id,
            qs:{
                name:"Get Request",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            cy.log(res);
        })
        cy.log("Your Board is Found")
    });

    it('Updating Detials of Boards', () => {
        cy.request({
            method:"PUT",
            url:baseURL+"/1/boards/"+id,
            qs:{
                name:"Updated Board",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            cy.log(res);
        })
        cy.log("Your Board is Updated")
    });
    
    it('Deleting the Most Recent Board', () => {
        cy.request({
            method:"DELETE",
            url:baseURL+"/1/boards/"+id,
            qs:{
                name:"Deleting a Board",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            cy.log(res);
        })
        cy.log("Board Deleted")
    });
});

//describe : collection of test cases
//it : single test case

//API key : 4e62b5032e4d6fd81438148a8ed4aefd
//Token : ATTA3ca98a9ab682fb5f4af0e4a43e35b4ba5c23368b6b4d6c574b6b507dc4f3431a95431A70
//secret : a51f289f3ff3daee479bbbb11f3131c77ccc5db66147da1e2ef6e87266c2633c

//Rest API URL : https://api.trello.com



// 20c9657e000b9cb3ad66e359dfdce58d
// 2124b013d1be31d2092458699ba3ac0345e4da2a0cb09646da4da452365942ff
// ATTAf8effd26b46da2c66d81cc3a8d030cbf36cb41eeefc7d7a836554cefa603062aB394BA08
