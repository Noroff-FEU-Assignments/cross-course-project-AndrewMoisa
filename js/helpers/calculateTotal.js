export default function calculateTotal(cart) {
  let total = 0;
  cart.forEach((item) => {
    total += parseFloat(item.price);
  });
  const roundedTotal = total.toFixed(2);
  return parseFloat(roundedTotal);
}
