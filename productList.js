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
  const id = product.id;

  clone.querySelector("h2").textContent = product.productdisplayname;

  clone.querySelector(".price span").textContent = product.price;

  clone.querySelector(".brandname").textContent = product.brandname;

  clone.querySelector(".season span").textContent = product.season;

  clone.querySelector(".type").textContent = product.articletype;

  clone.querySelector(".sale span").textContent = product.discount;

  clone.querySelector(".oneProduct").href = `product.html?ProductId=${product.id}`;

  clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

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
