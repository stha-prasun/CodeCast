// services/aiService.js
import { OpenAI } from 'openai';  // Import the OpenAI SDK
import dotenv from "dotenv";

dotenv.config();

// Create an OpenAI instance with your API key
const openai = new OpenAI({
  apiKey: process.env.API_KEY
});

// Function to fix code using OpenAI
const fixCode = async (codeSnippet) => {
  try {
    // Make a call to the Chat Completion endpoint to fix the code
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // Use GPT-4 or GPT-3.5
      messages: [
        { role: 'system', content: 'You are a helpful assistant that fixes programming errors in code.' },
        { role: 'user', content: `Here is the code with errors. Please fix the errors and return the corrected code: \n\n${codeSnippet}` }
      ],
    });

    return response.choices[0].message.content;  // Return the fixed code
  } catch (error) {
    console.error('Error while processing the code:', error);
    throw new Error('Error while processing the code');
  }
};

export { fixCode };