describe("Noted.CollectionCollection", function () {
   var collection;
   
   beforeEach(function () {
      collection = new Noted.CollectionCollection(); 
   });
   
   afterEach(function () {
       
   });
   
   it("should be able to fetch its contents from the couch view", function (){
       runs(function () {
           collection.fetch();
       });
       
       waitsFor(function () {
           return collection.length > 0;
       }, 500);
       
       runs(function () {
           expect(collection.length).toBe(2);
       });
   });
});