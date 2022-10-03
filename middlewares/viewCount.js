const { getTourViewCount } = require('../Services/tour.service');

const viewCount = async (req, res, next) => {
  const result = await getTourViewCount(req.params.id);

  next();
};

module.exports = viewCount;
