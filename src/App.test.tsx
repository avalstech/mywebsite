import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "@/App";

describe("App routing", () => {
  it("renders homepage hero content", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /strategy begins the moment you decide what not to build/i,
      })
    ).toBeInTheDocument();
  });
});
