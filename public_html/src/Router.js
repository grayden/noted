Noted.Router = Backbone.Router.extend({
    routes: {
        '': 'start'
    },
    
    start: function () {
        Noted.App.appView.render();
        Noted.App.groupings.fetch();
    }
});
