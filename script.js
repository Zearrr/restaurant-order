let cart = [];
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}
function updateCart() {
    const cartDetails = document.querySelector('.cart-details');
    const cartTotal = document.querySelector('.cart-total');
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
    cartDetails.textContent = `${totalItems} items in cart`;
    cartTotal.textContent = `฿${totalPrice.toFixed(2)}`;
}
function removeFromCart() {
    if (cart.length > 0) {
        cart.pop();
        updateCart();
    }
}
function clearCart() {
    cart = [];
    updateCart();
}
function showMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.style.display = 'none');
    document.getElementById(menuId).style.display = 'grid';
}