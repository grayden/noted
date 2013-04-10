Noted.ResultsView = Backbone.View.extend({
    id: 'results-container',
    
    initialize: function () {
        this.results = Noted.App.results;
        this.listenTo(this.results, 'reset', this.render);
    },
    
    render: function () {
        this.$el.empty();
        this.renderAllResults();
        return this;
    },
    
    createResultsViews: function () {
        this.resultViews = this.results.map(function (result) { return new Noted.ResultView({result: result});});
    },
    
    renderAllResults: function () {
        this.createResultsViews();
        _.each(this.resultViews, function (resultView) {
            this.$el.append(resultView.render().el);
        }, this);
    }
});