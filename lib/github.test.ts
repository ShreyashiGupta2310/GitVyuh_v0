import { describe, it, expect } from "vitest";
import { buildFolderTree } from "./github";

describe("buildFolderTree", () => {
  it("builds a correctly nested structure from a flat list", () => {
    const flatList = [
      { path: "app", type: "tree" },
      { path: "app/page.tsx", type: "blob" },
      { path: "lib", type: "tree" },
      { path: "lib/github.ts", type: "blob" },
    ];

    const result = buildFolderTree(flatList);

    expect(result.name).toBe("root");
    expect(result.children).toHaveLength(2);

    const appFolder = result.children.find((c: any) => c.name === "app");
    expect(appFolder.type).toBe("folder");
    expect(appFolder.children).toHaveLength(1);
    expect(appFolder.children[0].name).toBe("page.tsx");
    expect(appFolder.children[0].type).toBe("file");
  });

  it("returns an empty children array for an empty input list", () => {
    const result = buildFolderTree([]);
    expect(result.children).toHaveLength(0);
  });
});