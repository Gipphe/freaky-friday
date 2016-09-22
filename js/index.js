(function(window) {
	window.addToCart = function() {
		var cart = document.getElementById('cart-counter');
		var count = cart.innerHTML;
		count = Number(count);
		count += 1;
		cart.innerHTML = count;
	};
}(window));
