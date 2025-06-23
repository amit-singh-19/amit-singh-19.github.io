//shopping cart app
let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 55 },
  { id: 3, name: "Product 3", price: 70 },
];

const showProducts = () => {
  let str = "";
  products.map((value) => {
    str += `${value.name} - $${value.price}\n`;
  });
  console.log("***Product List***");
  console.log(str);
};
showProducts();

const addToCart = (id) => {
  cart = { ...cart, [id]: 1 };
};
addToCart(1);
addToCart(3);

const showCart = () => {
  let str = "";
  products.map((value) => {
    cart[value.id] &&
      (str += `${value.name} - $${value.price} - ${cart[value.id]} - $${
        cart[value.id] * value.price
      }\n`);
  });
  console.log("***My Cart***");
  console.log(str);
};
showCart();

const increment = (id) => {
  cart = { ...cart, [id]: cart[id] + 1 };
};
increment(1);
showCart();
increment(1);
showCart();

const decrement = (id) => {
  cart = { ...cart, [id]: cart[id] - 1 };
};
decrement(1);
showCart();

const orderValue = products.reduce((sum, value) => {
  return sum + value.price * (cart[value.id] ?? 0);
}, 0);
console.log(`Order Value: ${orderValue}`);
