<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Jasmine Spec Runner</title>

    <script type="text/javascript" src="lib/jquery.js"></script>
    <script type="text/javascript" src="lib/jquery-ui/js/jquery-ui-1.10.2.custom.min.js"></script>
    <script type="text/javascript" src="lib/underscore.js"></script>
    <script type="text/javascript" src="lib/backbone.js"></script>
    <script type="text/javascript" src="lib/sinon.js"></script>
    <script type="text/javascript" src="src/noted.js"></script>  
    <script type="text/javascript" src="SpecHelper.js"></script>
    <link rel="stylesheet" type="text/css" href="lib/jasmine/lib/jasmine.css">
    <script type="text/javascript" src="lib/jasmine/lib/jasmine.js"></script>
    <script type="text/javascript" src="lib/jasmine/lib/jasmine-html.js"></script   
    <script type="text/javascript" src="lib/jasmine-sinon.js"></script>  
    <!-- include source files here... -->
    <script type="text/javascript" src="src/GroupingModel.js"></script>
    <script type="text/javascript" src="src/OriginalModel.js"></script>  
    <script type="text/javascript" src="src/GroupingCollection.js"></script>
    <script type="text/javascript" src="src/OriginalCollection.js"></script>
    <script type="text/javascript" src="src/SearchToolView.js"></script>
    <script type="text/javascript" src="src/GroupingView.js"></script>
    <script type="text/javascript" src="src/DocumentsView.js"></script>
    <script type="text/javascript" src="src/GroupingsView.js"></script>
    <script type="text/javascript" src="src/AppView.js"></script>
    <script type="text/javascript" src="src/Router.js"></script>

    <?php require_once('templates.php'); ?>  
    <!-- include spec files here... -->
    <script type="text/javascript" src="specs/CouchDbConnectionSpec.js"></script>
    <script type="text/javascript" src="specs/GroupingModelSpec.js"></script>
    <script type="text/javascript" src="specs/GroupingCollectionSpec.js"></script>
    <script type="text/javascript" src="specs/OriginalCollectionSpec.js"></script>
    <script type="text/javascript" src="specs/GroupingViewSpec.js"></script>
    <script type="text/javascript" src="specs/AppViewSpec.js"></script>
  

</head>

<body>
    <div id='testbed'></div>
    <script type="text/javascript">
    (function() {
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 1000;

      var htmlReporter = new jasmine.HtmlReporter();

      jasmineEnv.addReporter(htmlReporter);

      jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
      };

      var currentWindowOnload = window.onload;

      window.onload = function() {
        if (currentWindowOnload) {
          currentWindowOnload();
        }
        execJasmine();
      };

      function execJasmine() {
        jasmineEnv.execute();
      }

    })();
  </script>
</body>
</html>
