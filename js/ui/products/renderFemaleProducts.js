export function renderFemaleProducts(products) {
  const femaleContainer = document.querySelector("#female-container");

  femaleContainer.innerHTML = `<h2 class="cardTitle">WOMENS TREDING</h2>
                              <div class="cardContainer" id="female-div"</div>`;

  const divFemaleContainer = document.querySelector("#female-div");

  products.forEach((product) => {
    divFemaleContainer.innerHTML += `
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
