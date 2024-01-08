import { fetchSingleProduct } from "../api/products/fetchSingleProduct.js";
import getQueryParam from "../helpers/getQueryParam.js";
import renderProductDetails from "../ui/products/renderPoductDetails.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleProductDetailsDisplay() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }

  try {
    const product = await fetchSingleProduct(id);
    renderProductDetails(product);
  } catch (error) {
    displayMessage("#jacket-container", error.message);
    console.log("jacket-container");
  }
}
