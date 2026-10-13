import { describe, expect, it } from "vitest";
import { renderWithProviders } from "./test-utils";
import routes from "../app/routes/routes";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("home page navigation", () => {
  it("redirects to shop page when clicking 'Discover Shop'", async () => {
    const user = userEvent.setup();

    const { router } = renderWithProviders({
      routes,
    });

    const button = screen.getByRole("button", { name: /discover shop/i });

    await user.click(button);

    expect(router.state.location.pathname).toBe("/shop");
  });
  it("redirects to shop page when clicking 'Start Exploring'", async () => {
    const user = userEvent.setup();

    const { router } = renderWithProviders({
      routes,
    });

    const button = screen.getByRole("button", { name: /start exploring/i });

    await user.click(button);

    expect(router.state.location.pathname).toBe("/shop");
  });
});
