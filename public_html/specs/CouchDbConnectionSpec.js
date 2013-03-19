describe("CouchDb Connection", function () {
    var testModel;
    var testCollection;
    
    beforeEach(function () {
        testModel = new Noted.TagModel();
        testCollection = new Noted.TagCollection();
    });
    
    afterEach(function () {
        
    });
    
    it ("should be able to save a document to the database", function () {
        runs(function () {
            testModel.save('Test', 'Test');
        });
        
        waitsFor(function () {
            return _.isString(testModel.get('_id'));
        }, 1000);
        
        runs(function () {
            expect(testModel.get('_id')).toBeTruthy();
            testModel.destroy();
        });
    });
    
    it("should be able to fetch one document", function () {
        var testModel2 = new Noted.TagModel();
        
        runs(function () {
            testModel.save('Test', 'Test').done(function (resp) {
                testModel2.set('_id', resp._id);
                testModel2.fetch();
            });        
        });
        
        waitsFor(function () {
            return _.isString(testModel2.get('Test'));
        }, 1000);
        
        runs(function () {
            expect(testModel2.get('Test')).toBe('Test');
            testModel.destroy();
        });
    });
    
    it("should be able to fetch all documents in a view", function () {
        runs(function () {
            testCollection.fetch();
        });
        
        waitsFor(function () {
            return testCollection.length > 0;
        }, 1000);
        
        runs(function () {
            expect(testCollection.length).toBeGreaterThan(0);
        });
    });
    
    it("should be able to update documents", function () {
        var newProperty = 'Test2';
        var oldProperty = 'Test';
        
        runs(function () {
            testModel.set('Test', oldProperty);
            testModel.save();
        });
        
        waitsFor(function (){
            return _.isString(testModel.id);
        }, 1000);
        
        runs(function () {
            var rev1 = testModel.get('_rev');
            expect(_.isString(rev1)).toBeTruthy();
            
            testModel.save('Test', newProperty).done(function () {
                expect(testModel.get('_rev')).not.toEqual(rev1);
                expect(testModel.get('Test')).not.toEqual(oldProperty);
                testModel.destroy();
            });
        });
    });
});