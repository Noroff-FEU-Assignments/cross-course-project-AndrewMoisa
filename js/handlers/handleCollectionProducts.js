import { fetchProducts } from "../api/products/fetchProducts.js";
import { renderCollections } from "../ui/products/renderCollectionProducts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleCollectionDisplay() {
  try {
    const products = await fetchProducts(25); // 25 is the anmount of products to fetch
    renderCollections(products);
  } catch (error) {
    displayMessage("#collections-div", error.message);
  }
}
