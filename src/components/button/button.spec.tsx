import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from ".";
import classes from "./button.module.css";

describe("button classesToAppend", () => {
  it("should have valid classes", () => {
    render(<Button classesToAppend={["primary"]}>Test1</Button>);

    const btn = screen.getByRole("button", { name: "Test1" });
    expect(btn).toHaveClass(classes.primary);
  });
});
