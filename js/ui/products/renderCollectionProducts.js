import { renderProducts } from "./renderProducts.js";

export function renderCollections(products) {
  const collectionsContainer = document.querySelector("#collection-container");

  console.log(products);
  collectionsContainer.innerHTML = `<div class="cardContainer"id="collections-div"</div>`;

  const divCollections = document.querySelector("#collections-div");

  renderProducts(products, divCollections);
}
