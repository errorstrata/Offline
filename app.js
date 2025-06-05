document.getElementById('addbutton').addEventListener('click', addToCart);
document.getElementById('showbutton').addEventListener('click', show);

let cart = JSON.parse(localStorage.getItem('cart1')) || [];

function addToCart() {
  let product = document.getElementById('product').value.trim();
  let price = parseFloat(document.getElementById('price').value);
  let quantity = parseInt(document.getElementById('Qnt').value);

  if (!product || isNaN(price) || isNaN(quantity)) return;

  let totalCost = quantity * price;
  cart.push({ product, quantity, price, t_cost: totalCost });

  localStorage.setItem('cart1', JSON.stringify(cart));
  show();
}

function show() {
  let viewArea = document.getElementById('viewArea');
  viewArea.innerHTML = "";

  let savedCart = JSON.parse(localStorage.getItem('cart1')) || [];
  savedCart.forEach((item, index) => {
    viewArea.innerHTML += `
      <div class="col-4 border">${item.product}</div>
      <div class="col-1 border">${item.quantity}</div>
      <div class="col-2 border">UGX ${item.price}</div>
      <div class="col-2 border">UGX ${item.t_cost}</div>
      <button class="col-1 btn btn-warning" onclick="removeItem(${index})">&times;</button>
    `;
  });
}

function removeItem(index) {
  let updatedCart = JSON.parse(localStorage.getItem('cart1')) || [];
  updatedCart.splice(index, 1);
  localStorage.setItem('cart1', JSON.stringify(updatedCart));
  show();
}

function resetCart() {
  localStorage.removeItem('cart1');
  cart = [];
  show();
}