'use strict'

import { getTopAddressOrders } from "../../services/Admin/analytics.service.js";

export const getTopOrders = async(req, res, next) => {
    //Get Current date and 30 days ago. Can be changed to pick from request
    let toDate   = new Date(); 
    let fromDate = new Date(new Date().setDate(toDate.getDate() - 30));

    const topAddressOrders =  await getTopAddressOrders(fromDate, toDate);

    res.status(200).json({
                        success: true,
                        message: `Order data as between ${fromDate} to ${toDate}`,
                        data: topAddressOrders
                    });
}