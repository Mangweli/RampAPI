import RampOrder from "../../models/order.model.js"

export const getTopAddressOrders = async (from, to) => {
    const topOrders = await RampOrder.aggregate([
        {
            $match: {
                createdAt: { $gte: from, $lt: to }
            }
        },
        {
            $group: {
                _id: "$userWalletAddress",
                address: { $first: "$userWalletAddress" },
                currency: { $last: "$currency" },
                totalTrx: { $sum: 1 }, totalAmountInWei: { $sum: "$amountInWei" }
            }
        },
        {
            $sort: { totalTrx: -1 }
        },
        { $limit: 1 }
    ]);

    return topOrders;
}