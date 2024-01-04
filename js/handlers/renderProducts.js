const productContainers = document.querySelectorAll(".cardContainer");

function renderProducts(param) {
  const productsPerContainer = 4; // Number of products per container
  let productIndex = 0;

  productContainers.forEach((container) => {
    let containerHTML = ""; // Store HTML content for each container

    for (let i = 0; i < productsPerContainer; i++) {
      if (productIndex < param.length) {
        const productTitle = param[productIndex].title;
        const productImage = param[productIndex].image;
        const productPrice = param[productIndex].price;
        const productId = param[productIndex].id;

        containerHTML += `<a href="/jacket.html?id=${productId}" class="noStyle">
                              <div class=cardJacket>
                             <img src="${productImage}" alt="${productTitle}">
                             <h3>${productTitle}</h3>
                             <span>${productPrice}</span>
                             </div>
                           </a>`;
        productIndex++;
      }
      containerHTML += `<div class="emptyProduct"></div>`;
    }

    container.innerHTML = containerHTML; // Set the HTML content for the container
  });
}

export default renderProducts;
