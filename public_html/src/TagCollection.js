Noted.TagCollection = Noted.CouchCollection.extend({
    Model: Noted.TagModel,
    url: Noted.Config.Urls.CouchDb,
    CouchSource: Noted.Config.Urls.TagsSource   
});