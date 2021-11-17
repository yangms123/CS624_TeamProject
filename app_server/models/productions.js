const mongoose = require('mongoose');

const aggregateRatingSchema = new mongoose.Schema({
  ratingValue: String,
  reviewCount: String,
  bestRating: String
});


const productionSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
  },
  brand: String,
  image: {
    type: String,
    required: true
  },
  description: String,
  url: String,
  productionID: String,
  PriceCurrency: String,
  Price: String,
  AggregateRating: [aggregateRatingSchema]
}

);

// productionSchema.index({productionID: '1'});

mongoose.model('productions', productionSchema);
