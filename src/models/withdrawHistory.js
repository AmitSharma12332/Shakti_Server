import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      ref: "User",
    },
    parentUser: {
      type: String,
      required: true,
      ref: "User",
    },
    userName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
      unique: true,
    },
    ifscCode: {
      type: String,
      required: true,
    },
    accountHolderName: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
      match: [/^\d{10}$/, "Invalid contact number"],
    },
    amount: {
      type: Number,
      required: true,
      min: 100,
    },
    status: {
      type: String,
      enum: ["approved", "rejected", "pending"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const WithdrawHistory =
  mongoose.models.WithdrawHistory || model("WithdrawHistory", schema);
