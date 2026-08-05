import {GoogleGenerativeAI} from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);


export async function generateText(prompt: string) {
    const model = genAI.getGenerativeModel({model: 'gemini-3.6-flash'});

    const result = await model.generateContent(prompt);
    return result.response.text();
}   


export function buildPrompt(repoData: any) {
    return `
  You are analyzing a GitHub repository's quality. Based on the data below, decide which of these 6 components are relevant, and respond with ONLY a JSON array — no other text, no markdown code fences.
  
  Each item in the array must have this shape:
  { "component": "ComponentName", "data": { ... } }
  
  Available components and their exact "data" shapes:
  
  1. ScoreCard: { "score": number, "verdict": string }
  2. ReadmeCard: { "feedback": string, "missingSections": string[] }
  3. CommitChart: { "commits": [{ "date": string, "count": number }] }
  4. FolderTree: { "root": { "name": string, "type": "file" | "folder", "children": [...] }, "organizationRating": string }
  5. TechStackBadges: { "languages": string[] }
  6. ErrorState: { "reason": "private" | "empty" | "rate-limited" | "invalid", "message": string }
  
  Only include components that make sense given the actual data. For example, skip CommitChart if there are fewer than 3 commits total.
  
  Repo data:
  ${JSON.stringify(repoData, null, 2)}
  
  Respond with ONLY the JSON array, nothing else.
  `;
  }

  export async function analyzeRepo(repoData: any) {
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
  
    const prompt = buildPrompt(repoData);
    const result = await model.generateContent(prompt);
    const text = result.response.text();
  
    const cleaned = text.replace(/```json|```/g, "").trim();
   // const cleaned = "this is not valid json{{{";

    try {
      const parsed = JSON.parse(cleaned);
      return parsed;
    } catch (error) {
      return [
        {
          component: "ErrorState",
          data: {
            reason: "invalid",
            message: "The AI analysis could not be completed. Please try again.",
          },
        },
      ];
    }
  
}