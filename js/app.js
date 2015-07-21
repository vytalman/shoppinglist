$(document).ready(function() {
	// Sortable list
	$('#list').sortable( {
		axis: "y"
	});

    // Show delete button when hover over items in list
    $('#list').on('mouseenter', 'li', function() {
    	$(this).children('.delete').toggleClass('show');
    });
    $('#list').on('mouseleave', 'li', function() {
    	$(this).children('.delete').toggleClass('show');
    });
});
