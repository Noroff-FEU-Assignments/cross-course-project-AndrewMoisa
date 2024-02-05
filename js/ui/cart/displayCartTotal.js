import * as storage from "../../helpers/storage/cartstorage.js";
import calculateTotal from "../../helpers/calculateTotal.js";

export function displayCartTotal() {
  const cart = storage.getCart();
  const price = calculateTotal(cart);

  const container = document.querySelector(".cartContainer");

  // Create section element
  const section = document.createElement("div");
  section.className = "totalprice";

  // Create div element for the container
  const containerDiv = document.createElement("div");
  containerDiv.className = "totalPriceContainer";

  // Create h2 element for the total price
  const heading = document.createElement("h2");
  heading.textContent = "Total";

  const span = document.createElement("span");
  span.textContent = `${price} NOK`;

  heading.appendChild(span);

  // Create "PLACE ORDER" button
  const placeOrderBtn = document.createElement("a");
  placeOrderBtn.href = "checkout.html";
  placeOrderBtn.className = "btnPrimary btnPricePrimary noStyle";
  placeOrderBtn.textContent = "PLACE ORDER";

  // Create "CONTINUE SHOPPING" button
  const continueShoppingBtn = document.createElement("a");
  continueShoppingBtn.href = "index.html";
  continueShoppingBtn.className = "btnSecondary btnPriceSecondary noStyle";
  continueShoppingBtn.textContent = "CONTINUE SHOPPING";

  // Create paragraph for additional information
  const additionalInfo = document.createElement("p");
  additionalInfo.textContent = "Includes taxes, shipping and discount codes.";

  // Append elements to their respective parent elements
  containerDiv.appendChild(heading);
  containerDiv.appendChild(placeOrderBtn);
  containerDiv.appendChild(continueShoppingBtn);
  containerDiv.appendChild(additionalInfo);

  section.appendChild(containerDiv);
  container.appendChild(section);
}
