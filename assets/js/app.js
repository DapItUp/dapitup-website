//These hide/show the men/women sections

$('#men').change(function() {
	$('.men').toggle();
});

$('#women').change(function() {
	$('.women').toggle();
});

//This code hides/shows the item area 
$('.toggle-items').click(function() {
	$('.shop-items').toggle('slow');
	$('.men-women-checkbox').toggle();
	if($(this).hasClass('transform')) {
		$(this).removeClass('transform');
		$('.mannequin').removeClass('top');
	} else {
		$(this).addClass('transform');
		$('.mannequin').addClass('top');
	}
});

//This code is for the drag/drop system of the app

// target elements with the "draggable" class
interact('.shop-item img')
  .draggable({
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

