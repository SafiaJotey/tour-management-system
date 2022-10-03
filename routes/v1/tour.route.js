const express = require('express');
const router = express.Router();
const tourController = require('../../controller/tour.controller');
const viewCount = require('../../middlewares/viewCount');
router.route('/cheapest').get(tourController.getcheapestTour);
router.route('/').get(tourController.getTours).post(tourController.addATour);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateATour);

module.exports = router;
