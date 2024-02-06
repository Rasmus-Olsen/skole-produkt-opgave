const url = "https://kea-alt-del.dk/t7/api/seasons";

fetch(url)
  .then((response) => response.json())
  .then(dateRecevied);

function dateRecevied(data) {
  //We have date
  console.log(data);
  data.forEach(seasons);
}

function seasons(season) {
  console.log(season);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".category").href = `product-list.html?Season=${season.season}`;

  clone.querySelector("h2").textContent = season.season;

  const parentElement = document.querySelector(".categories");
  parentElement.appendChild(clone);
}
