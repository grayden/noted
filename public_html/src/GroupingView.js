Noted.GroupingView = Backbone.View.extend({
    collectionTemplate: '#grouping-view-collection-template',
    tagTemplate: '#grouping-view-tag-template',
    className: 'grouping-box',
    
    events: {
        'click .add-record-container i': 'openAddRecordMenu',
        'click .add-record-widget': 'closeAddRecordMenu'
    },
    
    openAddRecordMenu: function () {
        this.$('.add-record-widget').animate({height: '100px'}, 100);
    },
    
    closeAddRecordMenu: function () {
        this.$('.add-record-widget').animate({height: '0px'}, 100);
    },
    
    initialize: function (options) {
        
        this.grouping = options.grouping;
        
        this.chooseTemplateType();
        this.template = _.template($(this.template).html());
    },

    chooseTemplateType: function () {
        this.template = (this.grouping.get('grouping') === 'collection') ? this.collectionTemplate : this.tagTemplate;
    },

    domGroupingType: function () {
        if (this.grouping.get('grouping') === 'tag')
            this.$el.addClass('tag-grouping-box');
        else if (this.grouping.get('grouping') === 'collection')
            this.$el.addClass('collection-grouping-box');
    },
                
    render: function () {     
        this.$el.html(this.template({grouping: this.grouping}));
        this.domGroupingType();
        return this;  
    }
});