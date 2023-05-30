var assert = require('assert');
var chainOfResponsibility = require('../../src/design-pattern/ChainOfResponsibility');

describe('Chain Of Responsibility Test case 1', function () {
    describe('Looping Handler', function () {
        it('should return Im Edge', function () {
            assert.equal(chainOfResponsibility('edge'), 'Im Edge');
        });
    });
});

describe('Chain Of Responsibility Test case 2', function () {
    describe('Looping Handler', function () {
        it('should return Im Google', function () {
            assert.equal(chainOfResponsibility('google'), 'Im Google');
        });
    });
});

describe('Chain Of Responsibility Test case 2', function () {
    describe('Looping Handler', function () {
        it('should return Im Firefox', function () {
            assert.equal(chainOfResponsibility('firefox'), 'Im Firefox');
        });
    });
});
