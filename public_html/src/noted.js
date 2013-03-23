var Noted = {
    Config: {
        Urls: { 
            CollectionsSource: "endpoints/couchEndpoint.php?request=_design/collections/_view/collections",
            TagsSource: "endpoints/couchEndpoint.php?request=_design/collections/_view/collections",
            CouchDb: "endpoints/couchEndpoint.php",
            SolrOriginals: "endpoints/solrEndpoint.php"
        }
    },
    CouchCollection: Backbone.Collection.extend({
        fetch: function () {
            var self = this;
            $.ajax(this.CouchSource).done(function (resp) {
                self.reset(resp.rows);
            });    
        }
    }),
    CouchModel: Backbone.Model.extend({
        url: function () { return Noted.Config.Urls.CouchDb + "/" + (this.isNew() ? "" : this.id); },
        idAttribute: "_id"
    }),
};