require('dotenv').config();
describe('Test suite', () => {

    const base = process.env.API_BASE;
    const apikey= process.env.API_KEY;
    const token=process.env.API_TOKEN;
    const board=process.env.BOARD;
    let id;

    it('Creating a board', () => {
        cy.request({

            method:"POST",
            url:base+"/1/boards/",
            qs:{
                name:board,
                key:apikey,
                token:token,
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body))
            id=res.id
            expect(response.status).to.eql(200)
        })
    });
    it('get a board', () => {
        cy.request({

            method:"GET",
            url:base+"/1/boards/"+id,
            qs:{
                name:"Update",
                key:apikey,
                token:token,
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body))
            expect(response.status).to.eql(200)
        })
    });
    it('Update a board', () => {
        cy.request({

            method:"PUT",
            url:base+"/1/boards/"+id,
            qs:{
                name:"Update",
                key:apikey,
                token:token,
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body))
            expect(response.status).to.eql(200)
        })
    });
    it('delete a board', () => {
        cy.request({

            method:"DELETE",
            url:base+"/1/boards/"+id,
            qs:{
                key:apikey,
                token:token,
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body))
            expect(response.status).to.eql(200)
        })
    });
});