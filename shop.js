// Shop Logic for 3AM

// Key for localStorage
const CART_KEY = '3am_cart';

// Add item to cart
export function addToCart(product) {
    let cart = getCart();
    cart.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    // Redirect to cart
    window.location.href = '/cart.html';
}

// Get cart items
export function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

// Remove item from cart (by index for simplicity, handling duplicates)
export function removeFromCart(index) {
    let cart = getCart();
    if (index > -1 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
    return cart; // return updated cart
}


// Shared utils
export function formatPrice(price) {
    return '$' + parseFloat(price).toFixed(2);
}
