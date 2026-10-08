const PRODUCT = {
name: "Box Boucles Tropicales",
price: 49.90
};

let quantity = 1;
let cartQuantity = 0;

const qtyElement = document.getElementById("qty");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const addCartButton = document.getElementById("addCart");

const cartOpen = document.getElementById("cartOpen");
const cartClose = document.getElementById("cartClose");
const cart = document.getElementById("cart");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

function formatPrice(price) {
return price.toFixed(2).replace(".", ",") + " €";
}

function updateQuantity() {
if (qtyElement) {
qtyElement.textContent = quantity;
}
}

function updateCart() {
if (!cartItems) return;

cartCount.textContent = cartQuantity;

if (cartQuantity === 0) {
cartItems.innerHTML = "<p class="empty-cart">Ton panier est vide.</p>";
cartTotal.textContent = "0,00 €";
return;
}

const total = PRODUCT.price * cartQuantity;

cartItems.innerHTML = `
<div class="cart-item">
<div>
<strong>${PRODUCT.name}</strong>
<p>${formatPrice(PRODUCT.price)} × ${cartQuantity}</p>
</div>

  <div class="cart-quantity">
    <button type="button" id="cartMinus">−</button>
    <span>${cartQuantity}</span>
    <button type="button" id="cartPlus">+</button>
  </div>
</div>

`;

cartTotal.textContent = formatPrice(total);

document.getElementById("cartMinus").addEventListener("click", function () {
if (cartQuantity > 0) {
cartQuantity--;
updateCart();
}
});

document.getElementById("cartPlus").addEventListener("click", function () {
cartQuantity++;
updateCart();
});
}

function openCart() {
if (cart) cart.classList.add("open");
if (overlay) overlay.classList.add("show");
}

function closeCart() {
if (cart) cart.classList.remove("open");
if (overlay) overlay.classList.remove("show");
}

if (minusButton) {
minusButton.addEventListener("click", function () {
if (quantity > 1) {
quantity--;
updateQuantity();
}
});
}

if (plusButton) {
plusButton.addEventListener("click", function () {
quantity++;
updateQuantity();
});
}

if (addCartButton) {
addCartButton.addEventListener("click", function () {
cartQuantity += quantity;
updateCart();
openCart();
});
}

if (cartOpen) {
cartOpen.addEventListener("click", function () {
updateCart();
openCart();
});
}

if (cartClose) {
cartClose.addEventListener("click", closeCart);
}

if (overlay) {
overlay.addEventListener("click", closeCart);
}

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

updateQuantity();
updateCart();
