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
