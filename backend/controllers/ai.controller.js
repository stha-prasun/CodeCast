// controllers/codeController.js
import { fixCode } from '../services/ai.service.js';

// Controller function to fix code
const fixCodeController = async (req, res) => {
  const { codeSnippet } = req.body;

  try {
    const fixedCode = await fixCode(codeSnippet);
    res.json({ fixedCode });  // Send the fixed code back to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Error processing the code' });
  }
};

export { fixCodeController };
