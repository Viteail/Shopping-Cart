import { beforeEach, describe, expect, it } from "vitest";
import { renderWithProviders } from "./test-utils";
import routes from "../app/routes/routes";

describe("default page", () => {
  let router: ReturnType<typeof renderWithProviders>["router"];

  beforeEach(() => {
    ({ router } = renderWithProviders({
      routes,
    }));
  });

  it("renders home page", () => {
    expect(router.state.location.pathname).toBe("/home");
  });
  it("doesn't render shop page", () => {
    expect(router.state.location.pathname).not.toBe("/shop");
  });
  it("doesn't render cart page", () => {
    expect(router.state.location.pathname).not.toBe("/cart");
  });
});
