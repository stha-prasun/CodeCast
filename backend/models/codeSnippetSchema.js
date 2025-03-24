import mongoose from "mongoose";

const codeSnippetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    code: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const CodeSnippet = mongoose.model("CodeSnippet", codeSnippetSchema);
export default CodeSnippet;
