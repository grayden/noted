Noted.DocumentsView = Backbone.View.extend({
    template: '#documents-view-template',
    id: 'documents-viewer',
    
    initialize: function ()
    {
        this.groupings = Noted.App.groupings;

        this.template = _.template($(this.template).html());

        this.listenTo(this.groupings, 'load', this.domActiveGroupingNameDisplay);
    },

    domActiveGroupingNameDisplay: function (grouping)
    {
        this.$('#active-grouping-name-display').text(grouping.get('name'));
    },

    render: function ()
    {
        this.$el.html(this.template()); 
        return this;
    }
});
