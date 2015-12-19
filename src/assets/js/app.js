/**
 * @name App
 * @description Toggle the mens and womans clothes along with the items within each container.
 * @todo Figure out a way to toggle each item but don't lose their current state if they have been touched or moved.
 */

 $('.toggle-items').click(toggleItems);
 adjustShopBoxHeight();

$('#men').change(function() {
    $('.men').toggle();
	adjustShopBoxHeight();
});

$('#women').change(function() {
    $('.women').toggle();
	adjustShopBoxHeight();
});


//This code cycles through the shopping categories
$('.to-shirts').click(function() {
	console.log("testing");
    $('.hats').css('visibility', 'hidden');
    $('.shirts').css('visibility', 'visible');
	adjustShopBoxHeight();
});

$('.to-bottoms').click(function() {
    $('.shirts').css('visibility', 'hidden');
    $('.bottoms').css('visibility', 'visible');
	adjustShopBoxHeight();
});

$('.to-hats').click(function() {
    $('.bottoms').css('visibility', 'hidden');
    $('.hats').css('visibility', 'visible');
	adjustShopBoxHeight();
});

// target elements with the "draggable" class
interact('.shop-item img')
    .draggable({
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
    });

// When we resize, we need to keep that current state visible on the screen.
window.dragMoveListener = dragMoveListener;

//
// Functions
//

/**
 * @function toggleItems
 * @description Toggle the items in the box
 */
function toggleItems() {
    $('.shop-items').toggle('slow');
    $('.men-women-checkbox').toggle();

    if ($(this).hasClass('transform')) {
        $(this).removeClass('transform');
        $('.mannequin').removeClass('top');
    } else {
        $(this).addClass('transform');
        $('.mannequin').addClass('top');
    }
}

/**
 * @function adjustShopBoxHeight
 * @description Fix the height of the box when an event happens that requires a resize.
 */
function adjustShopBoxHeight() {
	$('.shop-items').css({
		'height': $('.shop-category').height() + 50,
		'min-height': 400
	});
}

/**
 * @function dragMoveListener
 * @description Move the objects within the container
 * @param  {Object} event 	Event of the movement
 */
function dragMoveListener(event) {
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
	$(target).addClass('touched');
}
