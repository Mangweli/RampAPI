import RampOrder from "../../models/order.model.js"

export const getTopAddressOrders = async ($from, $to) => {
    const topOrders = await RampOrder.aggregate([
        // {
        //     $match: {
        //         createdAt: { $gte: new Date("2022-11-06"), $lt: new Date("2022-11-07") }
        //     }
        // },
        {
            $group: {
                _id: "$userWalletAddress",
                address: { $first: "$userWalletAddress" },
                currency: { $last: "$currency" },
                totalTrx: { $sum: 1 }, totalAmount: { $sum: "$amount" }
            }
        },
        {
            $sort: { totalRecords: -1 }
        }
        // { $limit: 1 }
    ]);

    return topOrders;
}

// {$group : {_id:"$position", count:{$sum:1}}},
//     {$sort: {count:-1}} 