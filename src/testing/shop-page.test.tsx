import { beforeEach, describe, expect, it } from "vitest";
import { renderWithProviders } from "./test-utils";
import routes from "../app/routes/routes";
import { mockProducts } from "./mock-products";
import { screen, within } from "@testing-library/react";
import classes from "@components/button/button.module.css";
import userEvent from "@testing-library/user-event";

describe("active category class", () => {
  beforeEach(() => {
    renderWithProviders({
      route: "/shop",
      routes,
      products: mockProducts,
    });
  });

  it("should be default for 'All' button", () => {
    const allBtn = screen.getByRole("button", { name: "All" });
    const laptopBtn = screen.getByRole("button", { name: "Laptops" });
    const smartphoneBtn = screen.getByRole("button", { name: "Smartphones" });
    const audioBtn = screen.getByRole("button", { name: "Audio" });

    expect(allBtn).toHaveClass(classes.active);
    expect(laptopBtn).not.toHaveClass(classes.active);
    expect(smartphoneBtn).not.toHaveClass(classes.active);
    expect(audioBtn).not.toHaveClass(classes.active);
  });
  it("should change when pressing a category button", async () => {
    const user = userEvent.setup();

    const laptopBtn = screen.getByRole("button", { name: "Laptops" });
    await user.click(laptopBtn);
    expect(laptopBtn).toHaveClass(classes.active);
  });
});

describe("rendering products", () => {
  beforeEach(() => {
    renderWithProviders({
      route: "/shop",
      routes,
      products: mockProducts,
    });
  });

  it("should match to number of provided data", () => {
    const products = screen.getAllByTestId("product-card");
    expect(products).toHaveLength(mockProducts.length);
  });

  it("can be incremented/decremented amount value", async () => {
    const user = userEvent.setup();

    const products = screen.getAllByTestId("product-card");
    const firstProduct = products[0];

    const incrementButton = within(firstProduct).getByRole("button", {
      name: /plus/i,
    });

    const decrementButton = within(firstProduct).getByRole("button", {
      name: /minus/i,
    });

    const input = within(firstProduct).getByRole("spinbutton");
    expect(input).toHaveValue(1);

    await user.click(incrementButton);
    expect(input).toHaveValue(2);

    await user.click(decrementButton);
    expect(input).toHaveValue(1);
  });

  it("input value can be changed", async () => {
    const user = userEvent.setup();

    const products = screen.getAllByTestId("product-card");
    const firstProduct = products[0];

    const input = within(firstProduct).getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("{Control>}a{/Control}");
    await user.keyboard("5");

    expect(input).toHaveValue(5);
  });

  it("should add to cart when clicking 'cart' button", async () => {
    const user = userEvent.setup();

    const products = screen.getAllByTestId("product-card");
    const firstProduct = products[0];

    const productTitle = within(firstProduct).getByText(/laptop 1/i);

    const cartLink = screen.getByRole("link", { name: /cart/i });
    const addToCartButton = within(firstProduct).getByRole("button", {
      name: /cart/i,
    });

    await user.click(addToCartButton);
    await user.click(cartLink);

    const cartProducts = screen.getAllByTestId("cart-product-card");
    const firstCartProduct = cartProducts[0];
    const cartProductTitle = within(firstCartProduct).getByText(/laptop 1/i);

    expect(productTitle.textContent).toMatch(cartProductTitle.textContent);
  });
});
