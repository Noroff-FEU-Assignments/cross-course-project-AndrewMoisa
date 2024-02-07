import * as storage from "../helpers/storage/cartstorage.js";
import { handleSizeButtons } from "./handleSizeButtons.js";

export function handleAddToCartButtons() {
  const button = document.getElementById("addtocart");
  button.addEventListener("click", handleCartClick);
  button.addEventListener("click", handleSizeButtons);
}

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
