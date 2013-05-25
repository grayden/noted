<html>
    <head>
        <script type="text/javascript" src="lib/jquery.js"></script>
        <script type="text/javascript" src="lib/jquery-ui/js/jquery-ui-1.10.2.custom.js"></script>
        <script type="text/javascript" src="lib/underscore.js"></script>
        <script type="text/javascript" src="lib/backbone.js"></script>
        <script type="text/javascript" src="src/noted.js"></script>
        
        <script type="text/javascript" src="src/GroupingModel.js"></script>
        <script type="text/javascript" src="src/OriginalModel.js"></script>

        <script type="text/javascript" src="src/GroupingCollection.js"></script>
        <script type="text/javascript" src="src/OriginalCollection.js"></script>

	<script type="text/javascript" src="src/DocumentsView.js"></script>
        <script type="text/javascript" src="src/GroupingView.js"></script>
        <script type="text/javascript" src="src/SearchToolView.js"></script>
        <script type="text/javascript" src="src/GroupingsView.js"></script>
        <script type="text/javascript" src="src/AppView.js"></script>

        <script type="text/javascript" src="src/Router.js"></script>
        
        <link type="text/css" rel="stylesheet" href="styles/style.css" />
        

	<?php require_once('templates.php'); ?>	
        
        <script type="text/javascript">
            $(function () {
                Noted.init();
            });
        </script>
    </head>
    <body>
        <div id="app-view"></div>
    </body>
</html>
