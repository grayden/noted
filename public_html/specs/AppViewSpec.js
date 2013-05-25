describe('Noted.AppView', function () {
    var view;

    beforeEach(function () {
        $('#testbed').html('<div id="app-view"></div>');
        Noted.init();
        view = Noted.App.appView; 
        view.render();
    });

    afterEach(function ()
    {

    });

    it("should be able to load a grouping when clicked", function ()
    {
        Noted.App.groupings.reset(Fixtures.Groupings.SomeGroupings);

        view.$('.grouping-box:eq(0)').click();

        expect(view.$('#active-grouping-name-display').text()).toBe('Test Group 1');
    });
});
