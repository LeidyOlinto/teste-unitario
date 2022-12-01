const { describe, it } = require('mocha')
const assert = require('assert');
var User = require('..src/core/user/user.js')

var admin = new User('admin', '123456');
assert(!admin.auth('admin', '123456'), 'Testing invalid credentials auth')
assert(admin.auth('admin', '123456'), 'Testing credentials auth');

describe('Testimg of types and values',()=>{ 

    it('Testing invalid user name',()=> {
        assert(!admin.auth('admi', '123456'))
    });
    it('Testing invalid user password',()=>
    { assert(!admin.auth('admi', '123456'))});

    it('Testing valid credentials',()=>{
        assert(admin.auth('admin', '123456'))
    });
    
});
