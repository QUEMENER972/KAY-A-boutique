const PRODUCT = {
  name: "Box Boucles Tropicales",
  price: 49.90
};

let quantity = 1;

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

let cartQuantity = 0;

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

  if (cartQuantity === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">Ton panier est vide.</p>
    `;
    cartTotal.textContent = "0,00 €";
    cartCount.textContent = "0";
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
        <button id="cartMinus">−</button>
        <span>${cartQuantity}</span>
        <button id="cartPlus">+</button>
      </div>
    </div>
  `;

  cartTotal.textContent = formatPrice(total);
  cartCount.text
