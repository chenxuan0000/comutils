describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual comUtils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, comUtils.deepClone(person))
        });

        it(`person === comUtils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, comUtils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`comUtils.isEmptyObject({}) should return true`, function () {
            assert(comUtils.deepClone({}))
        });

        it(`comUtils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(comUtils.isEmptyObject({
                one: 1
            }))
        });

        it(`comUtils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(comUtils.isEmptyObject([]))
        });
    });
})