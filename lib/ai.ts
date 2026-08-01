import {GoogleGenerativeAI} from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);


export async function generateText(prompt: string) {
    const model = genAI.getGenerativeModel({model: 'gemini-3.6-flash'});

    const result = await model.generateContent(prompt);
    return result.response.text();
}   


