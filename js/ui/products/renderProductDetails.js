function renderProductDetails(product) {
  const jacketContainer = document.querySelector("#jacket-container");

  jacketContainer.innerHTML = `<section class="imgJacket">
                             <img src="${product.image}" 
                             alt="${product.title}">
                             </section>
                             <section class="details">
                             <h1>${product.title}</h1>
                             <h2 class="price">${product.price}</h2>
                             <hr>
                             <h2 class="color">Color</h2>
                             <div class="colorsContainer">
                                        <div class="colors"></div>
                                        <div class="colors green"></div>
                                        <div class="colors grey"></div>
                                        <div class="colors red"></div>
                             </div>
                             <hr />
                             <h2 class="size">Size</h2>
                             <div class="sizes">
                                        <div><h2>${product.sizes[0]}</h2></div>
                                        <div><h2>${product.sizes[1]}</h2></div>
                                        <div><h2>${product.sizes[2]}</h2></div>
                                        <div><h2>${product.sizes[3]}</h2></div>
                                        <div><h2>${product.sizes[4]}</h2></div>
                             </div>
                             <div class="btnJacketContainer">
                                <a href="cart.html" class="btnPrimary btnJacketPrimary noStyle">BUY NOW </a>
                                <a href="cart.html" class="btnSecondary btnJacketSecondary noStyle"> ADD TO CART </a>
                             </div>
                             <hr />
                             <p class ="description">${product.description}</p>
                              </section>`;
}

export default renderProductDetails;
