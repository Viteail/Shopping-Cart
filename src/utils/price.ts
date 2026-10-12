export const getPriceFromDiscount = (
  price: number,
  discountPercentage: number,
) => Number(((price * discountPercentage) / 100).toFixed(2));

export const getPriceAfterDiscount = (
  price: number,
  discountPercentage: number,
) =>
  Number((price - getPriceFromDiscount(price, discountPercentage)).toFixed(2));

export const getTotalPrice = (price: number, amount: number) =>
  Number((price * amount).toFixed(2));
