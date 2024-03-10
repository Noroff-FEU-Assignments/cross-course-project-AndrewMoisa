import * as storage from "../../helpers/storage/cartstorage.js";

export function displayCart() {
  const cart = storage.getCart();

  const container = document.querySelector(".cartContainer");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  const divmain = document.createElement("div");
  divmain.className = "jackets";

  const h1 = document.createElement("h1");
  h1.textContent = "Order Summary";

  container.appendChild(divmain);
  divmain.appendChild(h1);

  cart.forEach((item) => {
    const cartItem = createCartItem(item);
    const hr = document.createElement("hr");
    divmain.appendChild(hr);
    divmain.appendChild(cartItem);
  });
}

function createCartItem(item) {
  const { title, price, image, size, quantity } = item;

  const divmain = document.createElement("div");
  divmain.className = "jacketCartContainer";

  const jacketImg = document.createElement("div");
  jacketImg.className = "jacketImg";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  const jacketText = document.createElement("div");
  jacketText.className = "jacketText";

  const h2Title = document.createElement("h2");
  h2Title.className = "jacketType";
  h2Title.textContent = item.title;

  const h2Size = document.createElement("h2");
  h2Size.textContent = `Size: ${item.size}`;

  const h2Color = document.createElement("h2");
  h2Color.textContent = "Color:";

  const h2Price = document.createElement("h2");
  h2Price.className = "rightSide";
  h2Price.textContent = `${item.price} NOK`;

  const pQuantity = document.createElement("p");
  pQuantity.textContent = `Quantity: ${item.quantity}`;

  divmain.appendChild(jacketImg);
  jacketImg.appendChild(img);
  divmain.appendChild(jacketText);
  jacketText.appendChild(h2Title);
  jacketText.appendChild(h2Size);
  jacketText.appendChild(h2Color);
  jacketText.appendChild(h2Price);
  jacketText.appendChild(pQuantity);

  return divmain;
}
