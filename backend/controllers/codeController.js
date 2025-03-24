import CodeSnippet from "../models/codeSnippetSchema.js";

export const saveCode = async (req, res) => {
  try {
    const { title, description, code, userID } = req.body;

    if (!title || !code) {
      return res.status(400).json({
        message: "Fields cannot be left empty!!",
        success: false,
      });
    }

    await CodeSnippet.create({
      title,
      description,
      code,
      author: userID,
    });

    return res.status(200).json({
      message: "Code Saved!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
