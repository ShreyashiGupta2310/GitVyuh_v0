import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorState from "./ErrorState";

describe("ErrorState", () => {
  it("displays the correct message for a private repo", () => {
    render(<ErrorState data={{ reason: "private", message: "This repo is private." }} />);
    expect(screen.getByText("This repo is private.")).toBeInTheDocument();
  });

  it("displays the correct message for a rate-limited request", () => {
    render(<ErrorState data={{ reason: "rate-limited", message: "Rate limit hit." }} />);
    expect(screen.getByText("Rate limit hit.")).toBeInTheDocument();
  });
});