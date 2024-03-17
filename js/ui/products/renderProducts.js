export function renderProducts(products, container) {
  console.log(products);
  const limitedProducts = products.slice(0, 5);

  limitedProducts.forEach((product) => {
    container.innerHTML += `
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
