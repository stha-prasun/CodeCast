import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    snippets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CodeSnippet",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userModel);
