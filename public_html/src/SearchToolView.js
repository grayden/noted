Noted.SearchToolView = Backbone.View.extend({
    id: 'search-tool-container',
    template: '#search-tool-template',
    
    initialize: function () {
        this.template = _.template($(this.template).html());
    },
    
    render: function () {
        this.$el.html(this.template());
        return this;
    }
});