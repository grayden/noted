Noted.AppView = Backbone.View.extend({
    el: '#app-view',
    template: '#app-view-template',

    initialize: function () {
        this.template = _.template($(this.template).html());
        
        this.setupViews();
    },
    
    setupViews: function () {
        this.searchToolView = new Noted.SearchToolView();
        this.groupingsView = new Noted.GroupingsView();
    },
    
    render: function () {
        this.$el.html(this.template());
        
        this.$('#result-viewer').empty();
        this.$('#result-viewer').append(this.searchToolView.render().el);
        this.$('#result-viewer').append(this.groupingsView.render().el);
        
        return this;
    }
});