'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("a.thumbnail").click(projectClick);
	$('#submitBtn').click(buttonClick);
  $('.carousel').carousel('pause');
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       $(".project-description").fadeOut();
    }
}

function buttonClick(e) {
	var chosenProject = $('#project').val();
	$(chosenProject).animate({
		width: $('#width').val()
	});
	var newText = $('#description').val();
	$(chosenProject + " .project-description").text(newText);
}