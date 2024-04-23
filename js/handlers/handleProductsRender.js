import { fetchCategories } from "../api/products/fetchCategories.js";
import { renderFemaleProducts } from "../ui/products/renderFemaleProducts.js";
import { renderMaleProducts } from "../ui/products/renderMaleProducts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleProductsDisplay() {
  try {
    const menCat = await fetchCategories(39); // 39 is the id for men category
    const womensCat = await fetchCategories(38); // 38 is the id for women category

    renderMaleProducts(menCat);
    renderFemaleProducts(womensCat);
  } catch (error) {
    displayMessage("#male-container", error.message);
  }
}
