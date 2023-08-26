import { product_price_range } from './constants';

export const getUniqueFilters = (data) => {
  if (!data.length) return;

  let filters = data.reduce((acc, product) => {
    acc?.color
      ? acc.color.add(product.color)
      : (acc.color = new Set([product.color]));

    acc?.gender
      ? acc.gender.add(product.gender)
      : (acc.gender = new Set([product.gender]));

    acc?.type
      ? acc.type.add(product.type)
      : (acc.type = new Set([product.type]));

    return acc;
  }, {});

  const priceSet = new Set([
    product_price_range.BETWEEN_0_250,
    product_price_range.BETWEEN_250_500,
    product_price_range.MORE_THAN_500,
  ]);

  filters = { ...filters, price: priceSet };

  return filters;
};

export const filterProducts = (filter, products) => {
  const temp = products.filter((product) => {
    for (const key in product) {
      if (filter.includes(product[key])) {
        return true;
      }
    }
    return false;
  });
  return temp;
};

export const filterProductsByPrice = (price, products) => {
  const temp = products.filter((product) => {
    if (
      price.includes(product_price_range.BETWEEN_0_250) &&
      product.price > 0 &&
      product.price <= 250
    ) {
      return true;
    }

    if (
      price.includes(product_price_range.BETWEEN_250_500) &&
      product.price > 250 &&
      product.price <= 500
    ) {
      return true;
    }

    if (
      price.includes(product_price_range.MORE_THAN_500) &&
      product.price > 500
    ) {
      return true;
    }

    return false;
  });

  return temp;
};
