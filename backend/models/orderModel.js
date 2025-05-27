const mongoose=require('mongoose');
const OrderSchema = new mongoose.Schema({
       cartItems: Array,
       amount: String,
       status: String,
       createdAt: Date
});
const OrderModel = mongoose.model('Order',OrderSchema);

module.exports = OrderModel;