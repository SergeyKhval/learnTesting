describe('webdriver.io page', function () {

    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        browser.setValue('#lst-ib', 'webdriver');
        browser.click('.lsb');

        var title = browser.getTitle();
        expect(title).to.equal('webdriver - Поиск в Google');
    });

});