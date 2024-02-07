import { displayCart } from "../ui/cart/displaycart.js";
import { displayCartTotal } from "../ui/cart/displayCartTotal.js";
// import { handleCartSizesButtons } from "./handleCartSizesButtons.js";

const handleDomContentLoaded = () => {
  document.addEventListener("DOMContentLoaded", function () {
    displayCart();
    displayCartTotal();
  });
};

export { handleDomContentLoaded };
