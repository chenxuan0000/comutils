describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`comutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(comutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('comutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(comutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`comutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(comutils.arrayEqual(arr, arr))
        });
    });
});