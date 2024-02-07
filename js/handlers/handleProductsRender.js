import { fetchProducts } from "../api/products/fetchProducts.js";
import { renderFemaleProducts } from "../ui/products/renderFemaleProducts.js";
import { renderMaleProducts } from "../ui/products/renderMaleProducts.js";
import { filterProductsByGender } from "../helpers/filterProductsByGender.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleProductsDisplay() {
  try {
    const products = await fetchProducts();

    const maleProducts = filterProductsByGender(products, "Male");
    renderMaleProducts(maleProducts);

    const FemaleProducts = filterProductsByGender(products, "Female");
    renderFemaleProducts(FemaleProducts);
  } catch (error) {
    displayMessage("#male-container", error.message);
  }
}
