import { validCategories } from "../../constants.js";
import { url } from "../../constants.js";

export async function fetchCategories(catId) {
  if (!validCategories.includes(catId)) {
    throw new Error("Invalid category ID");
  }
  const categoryUrl = `${url}?category=${catId}`;

  const response = await fetch(categoryUrl);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error(`There was an error fetching the product with id: ${catId}`);
}
