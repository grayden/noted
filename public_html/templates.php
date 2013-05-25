<?php ?>
<script type="text/html" id="app-view-template">
    <div id="result-viewer">
    </div>
</script>

<script type="text/html" id="documents-view-template">
    <div id="documents-header">
        <span id="active-grouping-name-display"></span>
    </div>
</script>

<script type="text/html" id='search-tool-template'>
    <div id="query-builder">
	<div>Tag: <input type="text" id="tag-search" name="tag-search"/></div>
	<div>Collection: <input type="text" id="collection-search" name="collection-search"/></div>
	<div>Words: <input type="text" id="words-search" name="words-search"/></div>
	<div>Name: <input type="text" id="name-search" name="name-search"/></div>
    </div>
    <div id="result-type-selector">
	Collections: <input type="radio" name="result-type-select" value="collection" />
	Tags: <input type="radio" name="result-type-select" value="tag" />
	<input type="submit" value="Search" />
    </div>
</script>

<script type="text/html" id="grouping-view-collection-template">
    <div class="grouping-title"><%=grouping.get('name')%></div>
    <div class="grouping-counts">
	<div class="match-count-box">
	    Matches: <span class="match-count">x</span>
	</div>
	<div class="records-count-box">
	    Records: <span class="record-count"><%=grouping.get('recordCount')%></span>
	</div>
    </div>
    <div class="grouping-results">
    </div>
    <div class="add-record-container"><i>+</i></div>
    <div class="add-record-widget">
	<form action="endpoints/fileUpload.php" method="post" enctype="multipart/form-data" target="upload_file_frame">
	    <input type="hidden" name="collection" value="<%=grouping.get('name')%>"/>
	    Name: <input type="text" name="name" /><br />
	    Source: <input type="text" name="source" /><br />
	    <input type="file" name="file"><input type="button" value="Add" class="load-file-trigger"/>       
	</form>
    </div>
    <iframe name="upload_file_frame" frameborder="0" height="0" width="0"></iframe>
</script>

<script type="text/html" id="grouping-view-tag-template">
    <div class="grouping-title"><%=grouping.get('name')%></div>
    <div class="grouping-counts">
	<div class="match-count-box">
	    Matches: <span class="match-count">x</span>
	</div>
	<div class="records-count-box">
	    Records: <span class="record-count"><%=grouping.get('recordCount')%></span>
	</div>
    </div>
    <div class="grouping-results">
    </div>
</script>

