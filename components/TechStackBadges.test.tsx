import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TechStackBadges from "./TechStackBadges";

describe("TechStackBadges", () => {
  it("displays every language as a badge", () => {
    render(<TechStackBadges data={{ languages: ["TypeScript", "CSS"] }} />);

    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });
});