const url = "https://kea-alt-del.dk/t7/api/products?limit=12";

fetch(url)
  .then((response) => response.json())
  .then(dateRecevied);

function dateRecevied(data) {
  //We have date
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("h2").textContent = product.productdisplayname;

  clone.querySelector(".price span").textContent = product.price;

  clone.querySelector(".brandname").textContent = product.brandname;

  clone.querySelector(".type").textContent = product.articletype;

  clone.querySelector(".sale span").textContent = product.discount;

  const productid = product.id;

  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

  clone.querySelector("img").src = imagePath;

  //Product on sale
  if (product.discount) {
    clone.querySelector("article").classList.add("onSale");
  }

  //Product sold out
  if (product.soldout) {
    clone.querySelector("article").classList.add("soldOut");
  }

  const parentElement = document.querySelector(".product-list");
  parentElement.appendChild(clone);
}
