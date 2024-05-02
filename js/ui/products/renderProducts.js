export function renderProducts(products, container) {
  products.forEach((product) => {
    container.innerHTML += `                <a href="/jacket.html?id=${product.id}" class="noStyle">
                                              <div class=cardJacket>
                                              <img src="${product.images[0].src}" alt="${product.slug}">
                                              <h3>${product.name}</h3>
                                              <span>${product.price_html}</span>
                                              </div>
                                              </a> `;
  });
}
