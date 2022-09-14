const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    title: { type: String,unique: false  },
    category: { type: String,unique: false },
    price: { type: Number, unique: false },
    quantity: {type:Number,unique: false},
    email: {type:String,unique: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales",SaleSchema );