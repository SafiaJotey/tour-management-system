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
      minLength: [5, 'Too small!'],
      maxLength: [50, 'Too long!'],
    },
    description: {
      type: String,
      required: [true, 'Please add a proper description'],
      trim: true,
      minLength: [10, 'Too small!'],
      maxLength: [200, 'Too long!'],
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
  },

  { timestamps: true }
);

//middlewares of mongoose
productSchema.pre('save', function (next) {
  if (this.quantity === 0) {
    this.status = 'out-of-stock';
  }
  next();
});
productSchema.post('save', function (doc, next) {
  console.log('After Saving data');
  next();
});

//instance creation
productSchema.methods.logger = function () {
  console.log(`Data saved for${this.name}`);
};

//Model creation
const Product = mongoose.model('Product', productSchema);

module.exports = Product;