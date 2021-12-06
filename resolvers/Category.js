const { products } = require("../data/innit-data");
exports.Category = {
  products: (parent, args, context) => {
    return products.filter((el) => el.categoryId === parent.id);
  },
};
