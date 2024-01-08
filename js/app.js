// import { handleJokeDetailsDisplay } from "./handlers/jokes/handleJokeDetailsDisplay.js";
import { handleProductsDisplay } from "./handlers/handleProductsRender.js";
import { handleProductDetailsDisplay } from "./handlers/handleProductRenderDetails.js";

function router() {
  const path = window.location.pathname;

  console.log(path);

  switch (path) {
    case "/":
    case "/index.html":
      handleProductsDisplay();
      break;
    case "/collection.html":
      handleProductsDisplay();
      break;
    case "/jacket.html":
      handleProductDetailsDisplay();
      break;
  }
}

router();
