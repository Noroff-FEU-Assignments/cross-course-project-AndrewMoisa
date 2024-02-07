import { renderProducts } from "./renderProducts.js";

export function renderMaleProducts(products) {
  const maleContainer = document.querySelector("#male-container");

  maleContainer.innerHTML = `<h2 class="cardTitle">MEN TREDING</h2>
                            <div class="cardContainer"id="male-div"</div>`;

  const divMaleContainer = document.querySelector("#male-div");

  renderProducts(products, divMaleContainer);
}
