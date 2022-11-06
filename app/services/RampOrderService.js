import RampOrder from "../models/RampOrder.js"

export const setNewOrder = (OrderDetails) => {
    new RampOrder(OrderDetails).save();
} 