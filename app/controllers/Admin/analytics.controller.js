import { getTopAddressOrders } from "../../services/Admin/analytics.service.js";

export const getTopOrders = async(req, res, next) => {
    const topAddressOrders =  await getTopAddressOrders();
    console.log(topAddressOrders);
    res.status(200).json(topAddressOrders);
    return await getTopAddressOrders(); 
}