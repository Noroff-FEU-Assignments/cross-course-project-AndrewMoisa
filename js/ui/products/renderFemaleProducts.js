import { renderProducts } from "./renderProducts.js";

export function renderFemaleProducts(products) {
  const femaleContainer = document.querySelector("#female-container");

  femaleContainer.innerHTML = `<h2 class="cardTitle">WOMENS TREDING</h2>
                              <div class="cardContainer" id="female-div"</div>`;

  const divFemaleContainer = document.querySelector("#female-div");

  renderProducts(products, divFemaleContainer);
}
