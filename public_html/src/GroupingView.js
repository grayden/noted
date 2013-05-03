Noted.GroupingView = Backbone.View.extend({
    collectionTemplate: '#grouping-view-collection-template',
    tagTemplate: '#grouping-view-tag-template',
    className: 'grouping-box',
    
    events: {
        'click .add-record-container i': 'openAddRecordMenu',
        'click .add-record-widget': 'closeAddRecordMenu',
        'click .add-record-widget input': 'stopPropagation'
    },
    
    openAddRecordMenu: function () {
        this.$('.add-record-widget').show(100);
    },
    
    closeAddRecordMenu: function () {
        this.$('.add-record-widget').hide();
    },
    
    stopPropagation: function (e) {
        e.stopPropagation();
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
        this.closeAddRecordMenu();
        return this;  
    }
});