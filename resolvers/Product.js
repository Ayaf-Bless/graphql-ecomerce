const { products } = require("../data/innit-data");
exports.Product = {
  category: (parent, args, context) => {
    return products.find((el) => el.categoryId === parent.categoryId);
  },
};
