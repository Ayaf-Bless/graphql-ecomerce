const { categories } = require("../data/innit-data");
const { products } = require("../data/innit-data");
exports.Query = {
  hello: () => ["Hello word", "bonjour", 1],
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    return products.find((el) => el.id === args.id);
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, context) => {
    return categories.find((el) => el.id === args.id);
  },
};
