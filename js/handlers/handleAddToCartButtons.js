import * as storage from "../helpers/storage/cartstorage.js";

export function handleAddToCartButtons() {
  const button = document.getElementById("addtocart"); // Fix: Use getElementById instead of querySelector

  button.addEventListener("click", handleCartClick);

  const sizeElements = document.querySelectorAll(".sizes h2");

  let oldSize = null;

  sizeElements.forEach((sizeElement) => {
    sizeElement.addEventListener("click", (event) => {
      const selectedSize = event.target.innerText;
      button.dataset.size = selectedSize;

      if (!selectedSize) {
        alert("Please select a size");
        button.disabled = true;
        return;
      }

      oldSize && oldSize.classList.remove("sizesborder");
      oldSize = sizeElement;

      sizeElement.classList.toggle("sizesborder");
    });
  });
}

function handleCartClick(event) {
  const { id, title, price, image, size } = event.target.dataset;
  const item = { id, title, price, image, size };
  const cart = storage.getCart();
  cart.push(item);
  storage.saveCart(cart);
}
