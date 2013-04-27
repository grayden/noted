describe("Noted.GroupingView", function () {
    
    var fakeTag;
    var fakeCollection;
    
    
    beforeEach(function () {
        fakeTag = new Noted.GroupingModel({
            grouping: 'tag',
            name: 'unity',
            recordCount: '12'
        });
        fakeCollection = new Noted.GroupingModel({
            grouping: 'collection',
            name: 'MATH2270',
            recordCount: 4
        });
        
        this.addMatchers({
            hasClass: function (classToHave)
            {
                var domToCheck = this.actual;

                this.message = function () {
                    return [
                        'Item is missing class ' + classToHave,
                        'Item has class ' + classToHave + ' but shouldnt'
                    ];
                };
                
                return domToCheck.hasClass(classToHave);
            }
        });
    });
    
    it("should have the class connected to its grouping type", function () {
        var tagView = new Noted.GroupingView({grouping: fakeTag});
        var collectionView = new Noted.GroupingView({grouping: fakeCollection});
        
        tagView.render();
        collectionView.render();
        
        expect(tagView.$el).hasClass('tag-grouping-box');
        expect(collectionView.$el).hasClass('collection-grouping-box');
    });
});