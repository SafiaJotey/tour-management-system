const { getTourViewCount } = require('../Services/tour.service');

const viewCount = async (req, res, next) => {
  const result = await getTourViewCount(req.params.id);
  console.log(result);
  next();
};

module.exports = viewCount;
