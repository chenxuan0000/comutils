describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`comUtils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(comUtils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('comUtils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(comUtils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`comUtils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(comUtils.arrayEqual(arr, arr))
        });
    });
});