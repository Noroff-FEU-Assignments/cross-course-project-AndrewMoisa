import * as storage from "../helpers/storage/cartstorage.js";

export function handleAddToCartButtons() {
  const button = document.getElementById("addtocart");

  button.addEventListener("click", handleCartClick);
  handleCartSizesButtons(button);
  handleColorsButtons(button);
}

function handleColorsButtons(button) {
  const colorElements = document.querySelectorAll(".colorsContainer div");

  button.style.pointerEvents = "none";

  let oldColor = null;

  colorElements.forEach((colorElement) => {
    colorElement.addEventListener("click", (event) => {
      const selectedColor = event.target.classList[1];
      button.dataset.color = selectedColor;

      oldColor && oldColor.classList.remove("colorsborder");
      oldColor = colorElement;

      colorElement.classList.toggle("colorsborder");

      if (event) {
        button.style.pointerEvents = "auto";
      }
    });
  });
}

function handleCartSizesButtons(button) {
  const sizeElements = document.querySelectorAll(".sizes h2");

  button.style.pointerEvents = "none";

  let oldSize = null;

  sizeElements.forEach((sizeElement) => {
    sizeElement.addEventListener("click", (event) => {
      const selectedSize = event.target.innerText;
      button.dataset.size = selectedSize;

      oldSize && oldSize.classList.remove("sizesborder");
      oldSize = sizeElement;

      sizeElement.classList.toggle("sizesborder");

      if (event) {
        button.style.pointerEvents = "auto";
      }
    });
  });
}

function handleCartClick(event) {
  const { id, title, price, image, size, color } = event.target.dataset;
  const item = { id, title, price, image, size, color, quantity: 1 };
  const cart = storage.getCart();

  const existingItemIndex = cart.findIndex(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.size === item.size &&
      cartItem.color === item.color
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push(item);
  }

  console.log(cart);

  storage.saveCart(cart);
}
