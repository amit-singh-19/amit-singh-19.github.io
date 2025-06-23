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

const showProducts = () => {
  productsContainer.innerHTML = "";
  products.map((value) => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.innerHTML = `
      <span> ${value.name} - ₹${value.price}</span>
      <button onclick = "addToCart(${value.id})" class="addtocart-btn">Add To Cart</button>`;
    productsContainer.appendChild(div);
  });
};
showProducts();

const addToCart = (id) => {
  cart = { ...cart, [id]: 1 };
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
        <div>
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
};

const decrement = (id) => {
  cart = { ...cart, [id]: cart[id] - 1 };
  showCart();
};

const orderValue = () => {
  const total = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ?? 0);
  }, 0);
  orderTotal.textContent = total;
};
