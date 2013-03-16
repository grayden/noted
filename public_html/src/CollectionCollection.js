Noted.CollectionCollection = Backbone.Collection.extend({
    Model: Noted.CollectionModel,
    url: Noted.Config.Urls.CouchDb,
    CouchSource: Noted.Config.Urls.CollectionsSource
});