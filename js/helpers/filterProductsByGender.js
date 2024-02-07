export function filterProductsByGender(products, gender) {
  return products.filter((product) => {
    // Check if the product has the specified gender property
    return product.gender === gender;
  });
}
