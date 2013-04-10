Noted.ResultView = Backbone.View.extend({
    template: '#result-view-template',
    className: 'result',
    
    initialize: function (options) {
        
        this.result = options.result;
        
        this.template = _.template($(this.template).html());
    },
    
    render: function () {
        console.log(this.result);
        this.$el.html(this.template({result: this.result}));
        return this;  
    }
});