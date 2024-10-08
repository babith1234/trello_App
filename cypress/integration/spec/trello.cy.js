describe('Test suite', () => {

    const base = "https://api.trello.com";
    const apikey="20c9657e000b9cb3ad66e359dfdce58d"
    const token="ATTAf8effd26b46da2c66d81cc3a8d030cbf36cb41eeefc7d7a836554cefa603062aB394BA08"
    const board="Trello Board";
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