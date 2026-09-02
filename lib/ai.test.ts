import { describe, it, expect } from "vitest";
import { cleanAIResponse } from "./ai";

describe("cleanAIResponse", () => {
  it("removes markdown code fences from AI responses", () => {
    const input = '```json\n[{"component":"ScoreCard"}]\n```';
    const result = cleanAIResponse(input);
    expect(result).toBe('[{"component":"ScoreCard"}]');
  });

  it("returns plain JSON text unchanged when there are no code fences", () => {
    const input = '[{"component":"ScoreCard"}]';
    const result = cleanAIResponse(input);
    expect(result).toBe('[{"component":"ScoreCard"}]');
  });
});