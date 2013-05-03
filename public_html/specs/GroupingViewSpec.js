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

        jasmine.Clock.useMock();
    });
    
    it("should have the class connected to its grouping type", function () {
        var tagView = new Noted.GroupingView({grouping: fakeTag});
        var collectionView = new Noted.GroupingView({grouping: fakeCollection});
        
        tagView.render();
        collectionView.render();
        
        expect(tagView.$el).hasClass('tag-grouping-box');
        expect(collectionView.$el).hasClass('collection-grouping-box');
    });
    
    it("should only have add record widget if it is a collection", function () {
        var tagView = new Noted.GroupingView({grouping: fakeTag});
        var collectionView = new Noted.GroupingView({grouping: fakeCollection});
        
        tagView.render();
        collectionView.render();
        
        expect(tagView.$('.add-record-widget').length).toBe(0);
        expect(collectionView.$('.add-record-widget').length).toBe(1);
    });

    it("should show add record widget after a few mili seconds", function () {
        var collectionView = new Noted.GroupingView({grouping: fakeCollection});
        collectionView.render();

        collectionView.$('.add-record-container i').click();

        jasmine.Clock.tick(100000);

        expect(collectionView.$('.add-record-widget').css('display')).not.toBe('none');
    });

    it("should hide the add record widget when clicking inside of it", function () {
        var collectionView = new Noted.GroupingView({grouping: fakeCollection});
        collectionView.render();

        collectionView.$('.add-record-container i').click();

        jasmine.Clock.tick(100000);

        expect(collectionView.$('.add-record-widget').css('display')).not.toBe('none');

        collectionView.$('.add-record-widget input:eq(0)').click();
        jasmine.Clock.tick(100000);

        expect(collectionView.$('.add-record-widget').css('display')).toBe('block');

        collectionView.$('.add-record-widget').click();
        jasmine.Clock.tick(100000);

        expect(collectionView.$('.add-record-widget').css('display')).toBe('none');
    });
});