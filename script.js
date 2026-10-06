const cfg = KAYEA_CONFIG;
let qty = 1;
let cartQty = 0;
const euro = n => n.toLocaleString("fr-FR",{style:"currency",currency:"EUR"});
const $ = s => document.querySelector(s);

$("#year").textContent = new Date().getFullYear();
$("#plus").onclick = ()=>{qty++;$("#qty").textContent=qty};
$("#minus").onclick = ()=>{qty=Math.max(1,qty-1);$("#qty").textContent=qty};

function renderCart(){
  $("#cartCount").textContent=cartQty;
  if(!cartQty){$("#cartItems").innerHTML='<p class="empty">Ton panier est vide.</p>';$("#cartTotal").textContent=euro(0);return}
  $("#cartItems").innerHTML=`<div class="cart-item"><div><b>${cfg.productName}</b><br><small>Quantité : ${cartQty}</small></div><strong>${euro(cfg.productPrice*cartQty)}</strong></div>`;
  $("#cartTotal").textContent=euro(cfg.productPrice*cartQty);
  const url = cfg.stripePaymentLink;
  $("#payBtn").href = url.startsWith("http") ? url : "#";
}
function openCart(){renderCart();$("#cart").classList.add("open");$("#overlay").classList.add("show")}
function closeCart(){$("#cart").classList.remove("open");$("#overlay").classList.remove("show")}
$("#addCart").onclick=()=>{cartQty+=qty;qty=1;$("#qty").textContent=1;openCart()};
$("#cartOpen").onclick=openCart;$("#cartClose").onclick=closeCart;$("#overlay").onclick=closeCart;
renderCart();
