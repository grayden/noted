Noted.GroupingCollection = Noted.CouchCollection.extend({
    Model: Noted.GroupingModel,
    url: Noted.Config.Urls.CouchDb,
    CouchSource: Noted.Config.Urls.GroupingsSource    
});