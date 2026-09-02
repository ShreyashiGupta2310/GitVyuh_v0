import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScoreCard from "./ScoreCard";

describe("ScoreCard", () => {
  it("displays the score and verdict text", () => {
    render(<ScoreCard data={{ score: 85, verdict: "Well organized." }} />);

    expect(screen.getByText("85")).toBeInTheDocument();
    expect(screen.getByText("Well organized.")).toBeInTheDocument();
  });

  it("shows a green background for high scores", () => {
    const { container } = render(
      <ScoreCard data={{ score: 90, verdict: "Excellent." }} />
    );
    expect(container.querySelector(".bg-green")).toBeInTheDocument();
  });

  it("shows a pink background for low scores", () => {
    const { container } = render(
      <ScoreCard data={{ score: 20, verdict: "Needs work." }} />
    );
    expect(container.querySelector(".bg-pink")).toBeInTheDocument();
  });
});