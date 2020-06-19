// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  // Ici le queryselector ne s'applique pas a document mais a product!!
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let subtotal = product.querySelector(".subtotal span");

  console.log(price, quantity, subtotal);

  price = Number(price.innerHTML);
  quantity = Number(quantity.value);

  console.log("price" + price, "quantity" + quantity);

  let sub = price * quantity;

  console.log("sub" + sub);
  subtotal.innerHTML = `${sub}`;

  return sub;
}

function calculateAll() {
  let products = document.getElementsByClassName("product");
  let totalvalue = document.querySelector("#total-value span");
  console.log("products" + products, "total value" + totalvalue);
  let totalprice = 0;

  for (let i = 0; i < products.length; i++) {
    totalprice += updateSubtotal(products[i]);
    console.log("total price" + totalprice, "total value" + totalvalue);
    totalvalue.innerText = `${totalprice}`;
  }
}

// // code in the following two lines is added just for testing purposes.
// // it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// // end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here
// }

// ITERATION 4

function removeProduct(event) {
  console.log("this works");
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector("#new-product-name");
  let newProductPrice = document.querySelector("#new-product-price");
  let body = document.querySelector("tbody");
  body.innerHTML += `<tr class="product">
<td class="name">
  <span>${newProductName.value} </span>
</td>
<td class="price">$<span>${newProductPrice.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`;
}

window.addEventListener("load", () => {
  listenRemoveBtn();

  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const create = document.getElementById("create");
  create.onclick = function () {
    createProduct();
    listenRemoveBtn();
  };
});

function listenRemoveBtn() {
  var removeBtns = document.getElementsByClassName("btn-remove");

  for (let index = 0; index < removeBtns.length; index++) {
    removeBtns[index].onclick = removeProduct;
  }
}

// getelementbyid & getelementbyclass name renvoient une HTML collection - ressemble a une array avec ts elements qui ont cette class
// Meme si 1 element va retourner un array d'1 element
// Pas possible d'utiliser for each mais boucle for c'est bon.
// Dynamique, cette variable s'update si ajout de nouveaux elements (par ex ajout de nouveaux produits)
// QueryselectorAll n'est pas dynamique. Possible d'utiliser foreach. Permet de faire des query plus precises
