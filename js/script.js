import url from "./api/url.js";
import renderProducts from "./handlers/renderProducts.js";
import getQuery from "./helpers/getQuery.js";

async function getProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderProducts(result);
    return result;
  } catch (error) {
    console.log(error); // Add a container to catch the error
  }
}

getProducts();

async function getProduct(id) {
  const detailUrl = `${url}/${id}`;

  const response = await fetch(detailUrl);

  if (response.ok) {
    const results = await response.json();
    console.log(results);
    return results;
  }

  throw new Error(`There was an error fetching the product with id: ${id}`);
}

const id = getQuery("id");
const product = await getProduct(id);

console.log(product.title);

const productCollection = document.querySelectorAll("#collection");
