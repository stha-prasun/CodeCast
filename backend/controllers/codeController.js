import CodeSnippet from "../models/codeSnippetSchema.js";
import { User } from "../models/userSchema.js";

export const saveCode = async (req, res) => {
  try {
    const { title, description, code, userID } = req.body;

    if (!title || !code) {
      return res.status(400).json({
        message: "Fields cannot be left empty!!",
        success: false,
      });
    }

    const snippet = await CodeSnippet.create({
      title,
      description,
      code,
      author: userID,
    });

    const user = await User.findById(userID);

    if (user) {
      user.snippets.push(snippet._id);
      await user.save();
    }
    
    return res.status(200).json({
      message: "Code Saved!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
