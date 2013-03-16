Noted.CollectionCollection = Backbone.Collection.extend({
    Model: Noted.CollectionModel,
    url: Noted.Config.Urls.CouchDb,
    CouchSource: Noted.Config.Urls.CollectionsSource,
    
    fetch: function () {
        var self = this;
        $.ajax(this.CouchSource).done(function (resp) {
            self.reset(resp.rows);
        });    
    }
});