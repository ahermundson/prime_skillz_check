	// 1 - After the DOM loads, add a paragraph tag that says "Page loaded"
	// to the section element
$(document).ready(function() {
  console.log("test");
  $('section').append('<p>"Page Loaded"</p>');

	// 2 - Change the text of the h1 element to something (anything!) else.
  $('h1').text("This h1 is changed");
  // 3 - Get rid of (delete) the useless unordered list (ul) by first
  // selecting the h2 nested within its list item.
  $('h2').parent().remove();
});
