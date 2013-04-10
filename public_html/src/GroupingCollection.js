Noted.GroupingCollection = Noted.CouchCollection.extend({
    Model: Noted.CollectionModel,
    url: Noted.Config.Urls.CouchDb,
    CouchSource: Noted.Config.Urls.GroupingsSource
});