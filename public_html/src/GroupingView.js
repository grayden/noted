Noted.GroupingView = Backbone.View.extend({
    template: '#grouping-view-template',
    className: 'grouping-box',
    
    initialize: function (options) {
        
        this.grouping = options.grouping;
        
        this.template = _.template($(this.template).html());
    },

    domGroupingType: function () {
        if (this.grouping.get('grouping') == 'tag')
            this.$el.addClass('tag-grouping-box')
        else if (this.grouping.get('grouping') == 'collection')
            this.$el.addClass('collection-grouping-box');
    },
            
    render: function () {     
        this.$el.html(this.template({grouping: this.grouping}));
        this.domGroupingType();
        return this;  
    }
});