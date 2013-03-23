describe("Noted.OriginalCollection", function () {
    var originals;
    
    
    beforeEach(function () {
        originals = new Noted.OriginalCollection();
    });
    
    afterEach(function () { 
        
    });
    
    it("should be able to get the originals in the solr database", function () {
        runs (function () {
            originals.fetch();
        });
        
        waitsFor(function () {
            return originals.length > 0;
        }, 1000);        
    });
});