const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  services: { type: String, required: true },
  date: { type: Date, required: true },
  user : {type : mongoose.Schema.Types.Mixed , required : true},
  timing: { type: String, required: true },
  address: { type: String, required: true },
  specialInstruction: { type: String },
  totalWeight : {type : Number, default : 0},
  status : {type : String , required : true , default : "Order Placed"},
  totalItems: { type: Number, default: 0 },
  costPerItem: { type: Number, default: 0 },
  totalAmount: { type: Number, default: 0 },
  feedback:{type: String},
  rating:{type:Number},
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
