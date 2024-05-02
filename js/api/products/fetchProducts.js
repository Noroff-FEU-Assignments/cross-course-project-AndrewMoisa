import { url } from "../../constants.js";

export async function fetchProducts(pageCount) {
  const perPage = `${url}?per_page=${pageCount}`;

  const response = await fetch(perPage);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the jokes");
}

function bob() {
  console.log(frog);
}
