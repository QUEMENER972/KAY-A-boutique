<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="KAYÉA — Beauté tropicale & cheveux texturés en Martinique.">
  <title>KAYÉA — Beauté tropicale</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

<header class="top">
  <a class="logo" href="#"><span>K</span>AYÉA</a>

  <nav>
    <a href="#produit">La Box</a>
    <a href="#pourquoi">Pourquoi KAYÉA</a>
    <a href="#contact">Contact</a>
  </nav>

  <button class="cart-btn" id="cartOpen">
    Panier <b id="cartCount">0</b>
  </button>
</header>

<main>

  <section class="hero">

    <div class="hero-copy">

      <p class="eyebrow">BEAUTÉ TROPICALE · MARTINIQUE</p>

      <h1>Prends soin de tes boucles, naturellement.</h1>

      <p class="lead">
        Des essentiels choisis pour les cheveux bouclés, frisés et crépus,
        avec une touche tropicale et une présentation cadeau.
      </p>

      <a class="btn primary" href="#produit">
        Découvrir la Box
      </a>

      <a
        class="btn ghost"
        id="heroWhatsapp"
        href="#"
        target="_blank"
        rel="noopener"
      >
        Parler à MAYA
      </a>

    </div>

    <div class="hero-card">

      <div class="box-art">

        <div class="ribbon">KAYÉA</div>

        <div class="jar">✦</div>

        <h3>
          Box<br>
          Boucles<br>
          Tropicales
        </h3>

        <strong>49,90 €</strong>

      </div>

    </div>

  </section>


  <section id="produit" class="section product-section">

    <div class="product-visual">

      <div class="box-art large">

        <div class="ribbon">KAYÉA</div>

        <div class="jar">✦</div>

        <h3>
          Box<br>
          Boucles<br>
          Tropicales
        </h3>

        <strong>49,90 €</strong>

      </div>

    </div>


    <div class="product-info">

      <p class="eyebrow">BEST-SELLER</p>

      <h2>Box Boucles Tropicales</h2>

      <div class="price">49,90 €</div>

      <p>
        Une routine cadeau pensée pour les cheveux bouclés,
        frisés et crépus.
      </p>

      <ul>
        <li>Gelée Honey KALAZAZA</li>
        <li>Crème K-Monoï KALAZAZA</li>
        <li>Bonnet satin</li>
        <li>Chouchou satin</li>
        <li>Boîte cadeau & papier de soie</li>
        <li>Carte KAYÉA</li>
      </ul>


      <div class="qty-row">

        <label>Quantité</label>

        <div class="qty">

          <button id="minus">−</button>

          <span id="qty">1</span>

          <button id="plus">+</button>

        </div>

      </div>


      <button class="btn primary wide" id="addCart">
        Ajouter au panier
      </button>

      <p class="secure">
        🔒 Paiement sécurisé par carte bancaire via Stripe
      </p>

    </div>

  </section>


  <section id="pourquoi" class="section cards">

    <div>
      <span>🌴</span>
      <h3>Pensée pour les Antilles</h3>
      <p>
        Une sélection adaptée à un univers beauté tropical et local.
      </p>
    </div>

    <div>
      <span>🎁</span>
      <h3>Prête à offrir</h3>
      <p>
        Une présentation soignée pour faire plaisir sans rien avoir à préparer.
      </p>
    </div>

    <div>
      <span>💬</span>
      <h3>MAYA vous conseille</h3>
      <p>
        Une assistante virtuelle pour répondre aux questions
        et guider la commande.
      </p>
    </div>

  </section>


  <section class="banner">

    <p>Une question sur tes cheveux ?</p>

    <a
      class="btn light"
      id="bannerWhatsapp"
      href="#"
      target="_blank"
      rel="noopener"
    >
      Demander conseil à MAYA
    </a>

  </section>

</main>


<footer id="contact">

  <div>

    <a class="logo" href="#">
      <span>K</span>AYÉA
    </a>

    <p>
      Beauté tropicale & cheveux texturés.
    </p>

  </div>


  <div>

    <h4>Contact</h4>

    <a
      id="footerWhatsapp"
      href="#"
      target="_blank"
      rel="noopener"
    >
      WhatsApp
    </a>

    <a
      id="instagramLink"
      href="#"
      target="_blank"
      rel="noopener"
    >
      Instagram
    </a>

  </div>


  <div>

    <h4>Informations</h4>

    <a href="mentions-legales.html">
      Mentions légales
    </a>

    <a href="cgv.html">
      CGV
    </a>

    <a href="politique-confidentialite.html">
      Confidentialité
    </a>

  </div>


  <small>
    © <span id="year"></span> KAYÉA — Tous droits réservés.
  </small>

</footer>


<div class="overlay" id="overlay"></div>


<aside class="cart" id="cart">

  <button class="close" id="cartClose">
    ×
  </button>

  <h2>Ton panier</h2>

  <div id="cartItems"></div>

  <div class="total">

    <span>Total</span>

    <strong id="cartTotal">
      0,00 €
    </strong>

  </div>


  <a
    id="payBtn"
    class="btn primary wide"
    href="#"
    target="_blank"
    rel="noopener"
  >
    Payer par carte
  </a>


  <a
    id="cartWhatsapp"
    class="btn whatsapp wide"
    href="#"
    target="_blank"
    rel="noopener"
  >
    Commander / question WhatsApp
  </a>


  <p class="note">
    Paiement sécurisé par carte bancaire via Stripe.
  </p>

</aside>


<script src="config.js"></script>
<script src="script.js"></script>

</body>
</html>
