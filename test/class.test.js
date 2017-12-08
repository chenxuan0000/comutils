describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`comutils.addClass($ele, 'test') should return true`, function () {
            comutils.addClass($ele, 'test')
            assert(comutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            comutils.addClass($ele, 'test')
        })
        it(`comutils.hasClass($ele, 'test') should return true`, function () {
            assert(comutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            comutils.addClass($ele, 'test')
        })
        it(`comutils.removeClass($ele, 'test') should return false`, function () {
            comutils.removeClass($ele, 'test')
            assert.notEqual(comutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});