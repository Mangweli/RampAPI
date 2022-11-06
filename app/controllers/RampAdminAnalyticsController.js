import { getTopAddressOrders } from "../services/AdminAnalyticsService.js";

export const getTopOrders = async(req, res, next) => {
    const topAddressOrders =  await getTopAddressOrders();
    console.log(topAddressOrders);
    res.status(200).json(topAddressOrders);
    return await getTopAddressOrders(); 
}