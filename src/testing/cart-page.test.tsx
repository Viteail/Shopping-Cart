import { beforeEach, describe, expect, it } from "vitest";
import { renderWithProviders } from "./test-utils";
import { mockProducts } from "./mock-products";
import routes from "../app/routes/routes";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("rendering cart products", () => {
  const setup = async () => {
    const user = userEvent.setup();

    renderWithProviders({ route: "/shop", routes, products: mockProducts });

    const allProducts = screen.getAllByTestId("product-card");

    for (const product of allProducts) {
      const addToCardButton = within(product).getByRole("button", {
        name: /cart/i,
      });

      await user.click(addToCardButton);
    }

    const cartLink = screen.getByRole("link", { name: /cart/i });
    await user.click(cartLink);

    const allCartProducts = screen.getAllByTestId("cart-product-card");

    return { user, allCartProducts };
  };

  it("should match to number of provided data", async () => {
    const { allCartProducts } = await setup();

    expect(allCartProducts.length === mockProducts.length);
  });

  it("should remove the product when clicking 'remove' button", async () => {
    const { user, allCartProducts } = await setup();

    const secondCartProduct = allCartProducts[1];
    const removeButton = within(secondCartProduct).getByRole("button", {
      name: /remove/i,
    });

    await user.click(removeButton);
    expect(secondCartProduct).not.toBeInTheDocument();
  });

  it("should remove all products when clicking 'Cancel All'", async () => {
    const { user } = await setup();

    const cancelAllButton = screen.getByRole("button", { name: /cancel all/i });

    await user.click(cancelAllButton);

    expect(screen.queryAllByTestId("cart-product-card")).toHaveLength(0);
  });

  it("should render empty cart when there is no products", () => {
    renderWithProviders({ route: "/cart", routes, products: mockProducts });

    const emptyCartText = screen.queryByText(/your cart is empty/i);

    expect(emptyCartText).toBeInTheDocument();
  });
});
