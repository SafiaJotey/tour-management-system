const tourServices = require('../Services/tour.service');

exports.getTours = async (req, res) => {
  try {
    const queries = {};
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      queries.fields = fields;
    }
    if (req.query.sort) {
      const sort = req.query.sort.split(',').join(' ');
      queries.sort = sort;
    }
    if (req.query.page) {
      const { page = 1, limit = 2 } = req.query;
      const skip = (page - 1) * parseInt(limit);

      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    const result = await tourServices.getToursService(queries);
    res.status(200).send({
      success: true,
      messege: 'Successfully get all the tous!',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Couldn't get the tours",
      error: error.message,
    });
  }
};
exports.addATour = async (req, res, next) => {
  try {
    const result = await tourServices.addTourService(req.body);
    res.status(200).send({
      success: true,
      messege: 'Successfully added!',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Tour didn't insert",
      error: error.message,
    });
  }
};
exports.getTourById = async (req, res, next) => {
  try {
    const result = await tourServices.getTourByIDService(req.params.id);
    res.status(200).send({
      success: true,
      messege: `Successfully get the tour by ID: ${req.params.id}`,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Tour didn't insert",
      error: error.message,
    });
  }
};
