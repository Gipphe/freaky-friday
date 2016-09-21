window.addToCart = function() {
	var cart = document.getElementById('cart-counter');
	var count = cart.innerHTML;
	count = Number(count);
	count += count;
	cart.innerHTML = count;
};
