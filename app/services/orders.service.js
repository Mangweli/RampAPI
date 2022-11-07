import RampOrder from "../models/order.model.js"

export const setNewOrder = (OrderDetails) => {
    new RampOrder(OrderDetails).save();
} 