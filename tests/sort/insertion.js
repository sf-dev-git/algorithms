var assert = require('assert');
var insertion_sort = require('../../src/sort/insertion');

describe('insertion sorting [8,6,2,9]', function () {
    describe('Looping Method', function () {
        it('should return [2,6,8,9] when sorted', function () {
            assert.deepEqual(insertion_sort([8,6,2,9]), [2,6,8,9]);
        });
    });
});

describe('insertion sorting [1,9,7,5,2]', function () {
    describe('Looping Method', function () {
        it('should return [1,2,5,7,9] when sorted', function () {
            assert.deepEqual(insertion_sort([1,9,7,5,2]), [1,2,5,7,9]);
        });
    });
});