Noted.GroupingsView = Backbone.View.extend({
    id: 'groupings-container',
    
    initialize: function () {
        this.groupings = Noted.App.groupings;
        this.groupingViews = [];
        this.listenTo(this.groupings, 'reset', this.renderAllGroupings);
    },
    
    render: function () {
        this.$el.empty();
        return this;
    },
    
    createGroupingsView: function () {
        this.groupingViews = this.groupings.map(function (grouping) { return new Noted.GroupingView({grouping: grouping});});
    },
    
    renderAllGroupings: function () {
        this.createGroupingsView();
        _.each(this.groupingViews, function (groupingView) {
            this.$el.append(groupingView.render().el);
        }, this);
        if (this.groupingViews.length % 2 != 0)
            this.$el.append(_.template('<div class="grouping-box"></div>'))
    }
});