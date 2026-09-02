import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReadmeCard from "./ReadmeCard";

describe("ReadmeCard", () => {
  it("displays the feedback text and missing sections", () => {
    render(
      <ReadmeCard
        data={{
          feedback: "README needs work.",
          missingSections: ["Installation", "License"],
        }}
      />
    );

    expect(screen.getByText("README needs work.")).toBeInTheDocument();
    expect(screen.getByText("Installation")).toBeInTheDocument();
    expect(screen.getByText("License")).toBeInTheDocument();
  });

  it("hides the missing sections block when there are none", () => {
    render(<ReadmeCard data={{ feedback: "Great README.", missingSections: [] }} />);
    expect(screen.queryByText("Missing sections:")).not.toBeInTheDocument();
  });
});