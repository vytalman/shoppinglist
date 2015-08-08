$(document).ready(function() {
	// Add to list using button
	$('#add-button').click(function() {
		var inputbox = document.getElementById('input');
		var inputval = inputbox.value;

		if(!$.trim($('#input').val())) {
			alert('Please enter text to add to the shopping list');
		} else {
			$('<li class="item"></li>').appendTo('#list').html('<div class="box"></div>' + inputval + '<img class="delete" src="images/delete.png">');

		// Clear input box
		document.getElementById('input').value = '';
		};
	});

	// Sortable list
	$('#list').sortable( {
		axis: "y"
	});

	// Checkbox functionality
	$('#list').on('click', '.box', function() {
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
    $('#list').on('click', '.delete', function() {
    	$(this).parent().remove();
    });
});
