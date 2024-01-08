export function renderMaleProducts(products) {
  const maleContainer = document.querySelector("#male-container");

  maleContainer.innerHTML = `<h2 class="cardTitle">MEN TREDING</h2>
                            <div class="cardContainer"id="male-div"</div>`;

  const divMaleContainer = document.querySelector("#male-div");
  products.forEach((product) => {
    divMaleContainer.innerHTML += `
                                        <a href="/jacket.html?id=${product.id}" class="noStyle">
                                        <div class=cardJacket>
                                        <img src="${product.image}" alt="${product.title}">
                                        <h3>${product.title}</h3>
                                        <span>${product.price}</span>
                                        </div>
                                        </a>
                                 `;
  });
}
