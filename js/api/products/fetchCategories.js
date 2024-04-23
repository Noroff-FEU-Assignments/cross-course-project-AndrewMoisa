import { url } from "../../constants.js";

export async function fetchCategories(catId) {
  const categoryUrl = `${url}?category=${catId}`;

  const response = await fetch(categoryUrl);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error(`There was an error fetching the product with id: ${id}`);
}
