var Noted = {
    App: {},
    Config: {
        Urls: { 
            GroupingsSource: "endpoints/couchEndpoint.php?request=_design/groupings/_view/groupings",
            CouchDb: "endpoints/couchEndpoint.php",
            SolrOriginals: "endpoints/solrEndpoint.php",
            SolrCreate: "endpoints/createSolrDocumentInCollection.php"
        }
    },
    CouchCollection: Backbone.Collection.extend({
        fetch: function () {
            var self = this;
            $.ajax(this.CouchSource).done(function (resp) {
                self.reset(_.pluck(resp.rows, "value"));
            });    
        }
    }),
    CouchModel: Backbone.Model.extend({
        url: function () { return Noted.Config.Urls.CouchDb + "/" + (this.isNew() ? "" : this.id); },
        idAttribute: "_id"
    }),
    
    init: function () {

        this.App.groupings = new Noted.GroupingCollection();
        this.App.appView = new Noted.AppView();
        this.App.router = new Noted.Router();

        Backbone.history.start();
    },
};

_.extend(Noted, Backbone.Events);
