describe('HTTP TODO', function(){

    it('GET', function(){

        cy.request({
            method: 'GET',
            url:'http://localhost:5000/api/todo',

    }).then(function(response){
        expect(response.body).have.property('url');

    });
    });

    it('POST', function(){

        cy.request({
            method: 'POST',
            url:'http://localhost:5000/api/todo',
            body: {
           'title': 'item example',
           'description': 'description item'
            },
            headers: {
                'content-type': 'application/json'

            }

    }).then(function(response){
        expect(response.body).have.property('json');
        expect(response.body).to.deep.equal({
            "title": "item example",
            "description": "description item"
        });

    });
    });

it('PUT', function () {
    cy.request('PUT', 'http://localhost:5000/api/todo', {'title': 'item 2'}).then((response) =>{
        expect(response.body).have.property('json');
        expect(response.body).to.deep.equal({
            "title": "item 2"
          
        });

    })
})
   
});



