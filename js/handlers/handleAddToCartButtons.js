import * as storage from "../helpers/storage/cartstorage.js";

export function handleAddToCartButtons() {
  const button = document.getElementById("addtocart");

  button.addEventListener("click", handleCartClick);
  handleCartSizesButtons(button);
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

  // sizeElements.addEventListener("click", (event) => {
  //   if (!event) {
  //     button.style.pointerEvents = "none";
  //   }
  // });
}

// if (!sizeBtn) {
//   button.style.pointerEvents = "none"; // Disables pointer events on the button
//   alert("Please select a size"); // Shows an alert to prompt the user to select a size
//   return; // Exits the function early, preventing further execution
// }

function handleCartClick(event) {
  const { id, title, price, image, size } = event.target.dataset;
  const item = { id, title, price, image, size, quantity: 1 };
  const cart = storage.getCart();

  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id && cartItem.size === item.size
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push(item);
  }

  storage.saveCart(cart);
}
