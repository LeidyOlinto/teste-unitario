const {describe ,it}= require('mocha')
const assert = require('assert');
const sqr = require('../src/core/sqr/sqr.js');
//var User = require('../core/user/user.js')
//teste unitario (no terminal coloca(node src/test.js))


describe('', () =>{
    it('Teste string ',() =>{
         assert('pessoa' === 'pessoa' );
        });
    it('Testing sqr',()=>{
        assert(sqr(3) === 9, );
    });
    it('Testing sqr 2',() => { 
        assert(sqr(5) === 25, );
    });
    it('Teste double',() => {
        assert(0.0 !== 1.0 );
       });
});

// function main(){
//     assert('pessoa' === 'pessoa' , 'Teste string ');
//     assert(sqr(3) === 9, 'Testing sqr');
//     var admin = new User('admin', '123456');
//     assert(! admin.auth('admin', '123456'),'Testing invalid credentials auth')
//     assert(admin.auth('admin', '123456'),'Testing credentials auth')
    

// }
// main();