document.getElementById('addbutton').addEventListener('click', addToCart);
document.getElementById('reset').addEventListener('click', resetCart);

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
  let viewArea = document.getElementById('data');
  viewArea.innerHTML = "";

  let savedCart = JSON.parse(localStorage.getItem('cart1')) || [];
  savedCart.forEach((item, index) => {
    viewArea.innerHTML += `
     </tr>
      <td class="product">${item.product}</td>
      <td class="quantity cent">${item.quantity}</td>
      <td class="price">UGX ${item.price}</td>
      <td class="cost">UGX ${item.t_cost}</td>
      <td class="del-btn cent" id="deletebtn" onclick="removeItem(${index})">&times;</td>
     </tr>
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
 confirm('This will delete everything in the cart')
 if(true) {
  localStorage.removeItem('cart1');
  cart = [];
  show();
 }
  
}

window.addEventListener('load',show)