const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {
  ObjectId
} = mongoose.Schema;

const CartItemSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product"
  },
  title: String,
  price: Number,
  count: Number
}, {
  timestamps: true
});

const CartItem = mongoose.model("CartItem", CartItemSchema);

const OrderSchema = new mongoose.Schema({
  products: [CartItemSchema],
  transaction_id: {},
  phone: {
    type: Number
  },
  amount: {
    type: Number
  },
  address: {

    type: String,
    required: true
  },
  color: {

    type: String,
    required: true
  },
  district: {

    type: String,
    required: true
  },
  sector: {

    type: String,
    required: true
  },
  cell: {

    type: String,
    required: true
  },
  village: {

    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Not processed",
    enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"] // enum means string objects
  },
  updated: Date,
  user: {
    type: ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = {
  Order,
  CartItem
};