function renderProductDetails(product) {
  const jacketContainer = document.querySelector("#jacket-container");
  console.log(product.price_html);

  jacketContainer.innerHTML = `<section class="imgJacket">
                             <img src="${product.images[0].src}" 
                             alt="${product.name}">
                             </section>
                             <section class="details">
                             <h1>${product.name}</h1>
                             <h2 class="price">${product.price_html}</h2>
                             <hr>
                             <h2 class="color">Color</h2>
                             <div class="colorsContainer">
                                        <div class="colors black"></div>
                                        <div class="colors green"></div>
                                        <div class="colors grey"></div>
                                        <div class="colors red"></div>
                             </div>
                             <hr />
                             <h2 class="size">Size</h2>
                             <div class="sizes">
                                        <div><h2 class="sizeborder">${product.attributes[0].terms[4].name}</h2></div>
                                        <div><h2 class="sizeborder">${product.attributes[0].terms[2].name}</h2></div>
                                        <div><h2 class="sizeborder">${product.attributes[0].terms[1].name}</h2></div>
                                        <div><h2 class="sizeborder">${product.attributes[0].terms[0].name}</h2></div>
                                        <div><h2 class="sizeborder">${product.attributes[0].terms[3].name}</h2></div>
                             </div>
                             <div class="btnJacketContainer">
                                <a href="cart.html" class="btnPrimary btnJacketPrimary noStyle" id="buynow" data-id="${product.id}">BUY NOW </a>
                                <a href="cart.html" class="btnSecondary btnJacketSecondary noStyle" id="addtocart" data-id="${product.id}" data-title="${product.name}" data-price="${product.prices.price}" data-image="${product.images[0].thumbnail}"> ADD TO CART </a>
                             </div>
                             <hr />
                             <p class ="description">${product.description}</p>
                              </section>`;
}

export default renderProductDetails;
