// import { handleJokeDetailsDisplay } from "./handlers/jokes/handleJokeDetailsDisplay.js";
import { handleProductsDisplay } from "./handlers/handleProductsRender.js";
import { handleProductDetailsDisplay } from "./handlers/handleProductRenderDetails.js";
import { handleDomContentLoaded } from "./handlers/handlecart.js";
import { handleCollectionDisplay } from "./handlers/handleCollectionProducts.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      handleProductsDisplay();
      break;
    case "/collection":
    case "/collection.html":
      handleCollectionDisplay();
      break;
    case "/jacket":
    case "/jacket.html":
      handleProductDetailsDisplay();
      break;
    case "/cart":
    case "/cart.html":
      handleDomContentLoaded();
      break;
  }
}

router();
