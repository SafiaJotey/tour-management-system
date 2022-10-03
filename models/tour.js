const mongoose = require('mongoose');
const tourSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
      unique: [true, 'Title should be unique'],
      minLength: [3, 'Title must have 3 characters'],
      maxLength: [20, 'Too long'],
    },
    subTitle: {
      type: String,
      required: [true, 'A subTitle is required'],
      trim: true,
      minLength: [10, 'Too small!'],
      maxLength: [100, 'Too long!'],
    },
    description: {
      type: String,
      required: [true, 'Please add a proper description'],
      trim: true,
      minLength: [20, 'Too small!'],
      maxLength: [500, 'Too long!'],
    },
    location: {
      type: String,
      required: [true, 'Please add a proper description'],
      trim: true,
    },
    imageURL: {
      type: String,
      required: [true, 'Please add an image'],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: [0, "price can't be negative"],
    },

    quantity: {
      type: Number,
      required: [true, 'Please provide quantity'],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: 'Quantity must be an integer ',
    },
    status: {
      type: String,
      enum: {
        values: ['on-going', 'comming-soon', 'discontinued'],
        message:
          "Values can't be {VALUE} , it must be on-going/comming-soon/discontinued",
      },
    },
    view: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

//Model creation
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
