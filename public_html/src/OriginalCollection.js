Noted.OriginalCollection = Backbone.Collection.extend({
    Model: Noted.OriginalModel,
    SolrSource: Noted.Config.Urls.SolrOriginals,
    
    fetch: function () {
        var self = this;
        $.ajax(this.SolrSource).done(function (resp) {
            self.reset(resp.response.docs);
        });    
    }
});