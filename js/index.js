(function(global) {
	'use strict';
	var timer;
	global.addToCart = function() {
		clearTimeout(timer);
		var counter = document.getElementById('cart-counter');
		var cart = document.getElementById('cart');
		var count = counter.innerHTML;
		count = Number(count);
		count += 1;
		counter.innerHTML = count;
		cart.style.backgroundColor = 'white';
		timer = setTimeout(function() {
			cart.style.backgroundColor = 'transparent';
		}, 500);
	};
	global.dud = function() {
		global.alert("Unfortunately, that's not a functioning link, since our task for the Freaky Friday Challenge was only to create ONE page.");
	};
}(window));
