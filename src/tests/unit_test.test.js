const assert = require('../core/assert/assert.js');
const sqr = require('../core/sqr/sqr.js');
var User = require('../core/user/user.js')
//teste unitario (no terminal coloca(node src/test.js))

function main(){
    assert('pessoa' === 'pessoa' , 'Teste string ');
    assert(sqr(3) === 9, 'Testing sqr');
    var admin = new User('admin', '123456');
    assert(! admin.auth('admin', '123456'),'Testing invalid credentials auth')
    assert(admin.auth('admin', '123456'),'Testing credentials auth')
    

}
main();