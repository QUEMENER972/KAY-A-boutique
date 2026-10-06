const cfg = KAYEA_CONFIG;

let qty = 1;
let cartQty = 0;

const euro = n =>
  n.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR"
  });

const $ = s => document.querySelector(s);


// ANNÉE
$("#year").textContent = new Date().getFullYear();


// WHATSAPP
function whatsappUrl(message) {
  return `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

$("#heroWhatsapp").href = whatsappUrl(
  "Bonjour KAYÉA, je souhaite des informations sur la Box Boucles Tropicales."
);

$("#bannerWhatsapp").href = whatsappUrl(
  "Bonjour MAYA, j'aimerais des conseils pour mes cheveux."
);

$("#footerWhatsapp").href =
  `https://wa.me/${cfg.whatsappNumber}`;

$("#cartWhatsapp").href = whatsappUrl(
  "Bonjour KAYÉA, je souhaite passer commande."
);


// INSTAGRAM
$("#instagramLink").href = cfg.instagramUrl;


// QUANTITÉ
$("#plus").onclick = () => {
  qty++;
  $("#qty").textContent = qty;
};

$("#minus").onclick = () => {
  qty = Math.max(1, qty - 1);
  $("#qty").textContent = qty;
};


// PANIER
function renderCart() {

  $("#cartCount").textContent = cartQty;

  if (!cartQty) {

    $("#cartItems").innerHTML =
      '<p class="empty">Ton panier est vide.</p>';

    $("#cartTotal").textContent = euro(0);

    $("#payBtn").href = "#";

    return;
  }

  const total = cfg.productPrice * cartQty;

  $("#cartItems").innerHTML = `
    <div class="cart-item">
      <div>
        <b>${cfg.productName}</b>
        <br>
        <small>Quantité : ${cartQty}</small>
      </div>

      <strong>${euro(total)}</strong>
    </div>
  `;

  $("#cartTotal").textContent = euro(total);

  const url = cfg.stripePaymentLink;

  $("#payBtn").href =
    url && url.startsWith("http")
      ? url
      : "#";
}


// OUVERTURE DU PANIER
function openCart() {
  renderCart();

  $("#cart").classList.add("open");
  $("#overlay").classList.add("show");
}


// FERMETURE DU PANIER
function closeCart() {
  $("#cart").classList.remove("open");
  $("#overlay").classList.remove("show");
}


// AJOUT AU PANIER
$("#addCart").onclick = () => {

  cartQty += qty;

  qty = 1;

  $("#qty").textContent = 1;

  openCart();
};


// BOUTONS PANIER
$("#cartOpen").onclick = openCart;
$("#cartClose").onclick = closeCart;
$("#overlay").onclick = closeCart;


// INITIALISATION
renderCart();
