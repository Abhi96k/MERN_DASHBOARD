import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({
      role: "admin",
    }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;

    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      {
        $unwind: { path: "$affiliateStats", preserveNullAndEmptyArrays: true },
      },
    ]);

    // Check if userWithStats array is empty
    if (userWithStats.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if affiliateStats is undefined or null
    if (!userWithStats[0].affiliateStats) {
      return res
        .status(404)
        .json({ message: "No affiliate stats found for the user" });
    }

    const salesTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );

    const filteredSaleTransactions = salesTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
