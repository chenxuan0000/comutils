describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('comUtils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(comUtils.isEmail("leiquanlive.com"))
        });
        it('comUtils.isEmail("leiquan@live.com") should return true ', function () {
            assert(comUtils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('comUtils.isIdCard("622224188203234033") should return true ', function () {
            assert(comUtils.isIdCard("622224188203234033"))
        });
        it('comUtils.isIdCard("zas224188203234033") should return false', function () {
            assert(!comUtils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('comUtils.isPhoneNum("18882324234") should return true ', function () {
            assert(comUtils.isPhoneNum("18882324234"))
        });
        it('comUtils.isPhoneNum("8618882324234") should return true ', function () {
            assert(comUtils.isPhoneNum("8618882324234"))
        });
        it('comUtils.isPhoneNum("5534553") should return false', function () {
            assert(!comUtils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('comUtils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(comUtils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('comUtils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(comUtils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('comUtils.isUrl("www.baidu.com") should return true', function () {
            assert(comUtils.isUrl("www.baidu.com"))
        });
        it('comUtils.isUrl("baidu.com") should return true', function () {
            assert(comUtils.isUrl("baidu.com"))
        });
        it('comUtils.isUrl("http://baiducom") should return false', function () {
            assert(!comUtils.isUrl("http://baiducom"))
        });
    });

});