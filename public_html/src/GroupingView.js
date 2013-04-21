Noted.GroupingView = Backbone.View.extend({
    template: '#grouping-view-template',
    className: 'grouping-box',
    
    initialize: function (options) {
        
        this.grouping = options.grouping;
        
        this.template = _.template($(this.template).html());
    },
    
    render: function () {
        this.$el.html(this.template({grouping: this.grouping}));
        return this;  
    }
});