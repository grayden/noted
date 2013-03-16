Noted.TagCollection = Backbone.Collection.extend({
    Model: Noted.TagModel,
    url: Noted.Config.Urls.CouchDb,
    CouchSource: Noted.Config.Urls.TagsSource
});