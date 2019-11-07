describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://p3n.3tlstaging.com/home').then(function()
        {

            browser.sleep(5000);
            expect(browser.getTitle()).toEqual('Flexxi Rewards Network');
            //navigation bar
            element(by.css("a[href='/home']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='#howitworks']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/home/earnpoints']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='#rewards']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/faq']")).isPresent().toBe(true);

            //homepage banner
            element(by.css("div.tp-mask-wrap>div>img[src='../../assets/images/banner/flexxishop_l_banner.png']"))
                .isPresent().toBe(true);

            var login = element(by.xpath("//div[@class='tp-mask-wrap']//div[contains(.,'login ') and @class ='tp-caption rev-btn']"));
                login.isPresent().toBe(true);

            var reg= element(by.xpath("//div[@class='tp-mask-wrap']//div[contains(.,'register') and @class ='tp-caption rev-btn']"));
            reg.isPresent().toBe(true);


        });

    });
});
