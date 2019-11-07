describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://p3n.3tlstaging.com/home').then(function()
        {
            browser.sleep(5000);
            expect(browser.getTitle()).toEqual('Flexxi Rewards Network');
        });

    });
});
