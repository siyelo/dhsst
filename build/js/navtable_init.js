/**
 * nav table functionality
 */

$(document).ready(function(){
	$('.show_programs').click(function(event) {
    element = $(this);
    tr = element.parents("tr:first").next('tr');
    if ( tr.hasClass('hidden')  ) {
      tr.show();
      tr.removeClass('hidden');
      element.html('Hide Programs');
    } else {
      tr.hide();
      tr.addClass('hidden');
      element.html('Show Programs');
    }
	});
});

