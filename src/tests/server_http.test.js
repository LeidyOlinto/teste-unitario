const assert = require('.../core/assert/assert.js');
const http = require('http');
const { it } = require('mocha');


describe('Integration tests', () => {
    it('Integration test on localhost:3000=== Serve On.', () => {

        http.request('http://localhost:3000', (resp) => {
            const chunck = [];
            resp.on('data', (chunck) => chunck.push(chunck));
            resp.on('end', () => {
                const body = chunck.join('');
                assert(body === 'Server On.');
            });

        }).end();
    });

    it('Integration test on localhost:3000 !== Serve On.', () => {

        http.request('http://localhost:30001', (resp) => {
            const chunck = [];
            resp.on('data', (chunck) => chunck.push(chunck));
            resp.on('end', () => {
                const body = chunck.join('');
                assert(body !== 'Server On.');
            });

        }).end();
    });
});
