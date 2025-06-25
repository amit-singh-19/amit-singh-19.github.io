//shopping cart app
let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 55 },
  { id: 3, name: "Product 3", price: 70 },
];

const productsContainer = document.getElementById("product-container");
const cartContainer = document.getElementById("cart-container");
const orderTotal = document.getElementById("order-total");
const homeSection = document.getElementById("home-section");
const cartSection = document.getElementById("cart-section");

const showHome = () => {
  homeSection.style.display = "block";
  cartSection.style.display = "none";
};

const showCartProducts = () => {
  homeSection.style.display = "none";
  cartSection.style.display = "block";

  showCart();
};

const showProducts = () => {
  productsContainer.innerHTML = "";
  products.map((value) => {
    const div = document.createElement("div");
    div.className = "product-item";
    if (cart[value.id]) {
      div.innerHTML = `
        <span> ${value.name} - ₹${value.price}</span>
        <div class="add-cart-btn">
        <button onclick= "decrement(${value.id})" class="cart-btn">-</button> 
        <span class="cart-span">${cart[value.id]}</span> 
        <button onclick= "increment(${value.id})" class="cart-btn">+</button> 
        </div>
      `;
    } else {
      div.innerHTML = `
        <span> ${value.name} - ₹${value.price}</span>
        <button onclick = "addToCart(${value.id})" class="addtocart-btn">Add To Cart</button>`;
    }
    productsContainer.appendChild(div);
  });
};
showProducts();

const addToCart = (id) => {
  cart = { ...cart, [id]: 1 };
  showProducts();
  showCart();
};

const showCart = () => {
  cartContainer.innerHTML = "";
  products.map((value) => {
    if (cart[value.id]) {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <span> ${value.name} - ₹${value.price} x ${cart[value.id]}  =  ₹${
        cart[value.id] * value.price
      } </span>
        <div class="add-cart-btn">
        <button onclick= "decrement(${value.id})" class="cart-btn">-</button> 
        <span class="cart-span">${cart[value.id]}</span> 
        <button onclick= "increment(${value.id})" class="cart-btn">+</button> 
        </div>
      `;
      cartContainer.appendChild(div);
    }
  });
  orderValue();
};

const increment = (id) => {
  cart = { ...cart, [id]: cart[id] + 1 };
  showCart();
  showProducts();
};

const decrement = (id) => {
  cart = { ...cart, [id]: cart[id] - 1 };
  showCart();
  showProducts();
};

const orderValue = () => {
  const total = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ?? 0);
  }, 0);
  orderTotal.textContent = total;
};
