Noted.GroupingsView = Backbone.View.extend({
    id: 'groupings-container',
    
    initialize: function () {
        this.groupings = Noted.App.groupings;
        this.listenTo(this.groupings, 'reset', this.render);
    },
    
    render: function () {
        this.$el.empty();
        this.renderAllGroupings();
        return this;
    },
    
    createGroupingsView: function () {
        this.groupingView = this.groupings.map(function (result) { return new Noted.GroupingView({result: result});});
    },
    
    renderAllGroupings: function () {
        this.createGroupingsView();
        _.each(this.groupingViews, function (groupingView) {
            this.$el.append(groupingView.render().el);
        }, this);
    }
});