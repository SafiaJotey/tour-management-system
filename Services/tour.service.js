const Tour = require('../models/Tour');
exports.addTourService = async (newTour) => {
  const tour = new Tour(newTour);
  const result = await tour.save();
  return result;
};

exports.getToursService = async (queries) => {
  const result = await Tour.find({})
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sort);
  return result;
};
exports.getTourByIDService = async (id) => {
  const result = await Tour.find({ _id: id });
  return result;
};
// exports.getTourViewCount = async (id) => {
//   const result = await Tour.find({ _id: id }, { $set: { view: { $in: 1 } } });

//   return result;
// };
exports.updateTourtService = async (id, data) => {
  const updatedTour = await Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  //   const product = await Product.findById(productId);
  //   const updatedProduct = await product.set(data).save();
  return updatedTour;
};
exports.getTourtcheapestService = async () => {
  const result = await Tour.find({}).sort({ price: 1 }).limit(3);
  return result;
};
