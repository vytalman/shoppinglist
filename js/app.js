$(document).ready(function() {
	// Add to list
	
	
	// Sortable list
	$('#list').sortable( {
		axis: "y"
	});

	// Checkbox functionality
	$('.box').on('click', function() {
		$(this).toggleClass('checked');
	});

    // Show delete button when hover over items in list
    $('#list').on('mouseenter', 'li', function() {
    	$(this).children('.delete').toggleClass('show');
    });
    $('#list').on('mouseleave', 'li', function() {
    	$(this).children('.delete').toggleClass('show');
    });

    // Delete list items
    $('.delete').on('click', function() {
    	$(this).parent().remove();
    });
});
