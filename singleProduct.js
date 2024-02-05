const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("ProductId");

console.log(id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => singleProduct(data));

// Single-product
function singleProduct(product) {
  console.log(product);

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".category span").textContent = product.category;
  document.querySelector(".color span").textContent = product.basecolour;
  document.querySelector(".season span").textContent = product.season;
  document.querySelector(".type").textContent = product.articletype;
  document.querySelector(".price span").textContent = product.price;
  document.querySelector(".sale span").textContent = product.discount;
}
