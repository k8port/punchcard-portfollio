import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/ui/Header"; // Adjust path if needed
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("renders the Header component with navigation links", () => {
    render(<Header />);

    // Verify header text
    expect(
      screen.getByText("Kate Portalatin - Software Engineer")
    ).toBeInTheDocument();

    // Verify all navigation links are present
    const navItems = ["Home", "Projects", "Skills", "Resume", "Contact"];
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("toggles mobile menu when clicking the hamburger button", async () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });

    // Verify menu is initially closed
    expect(screen.getByRole("navigation")).toHaveClass("hidden md:flex");

    // Click the menu button to open
    fireEvent.click(menuButton);
    expect(screen.getByRole("navigation")).not.toHaveClass("hidden md:flex");

    // Click again to close
    fireEvent.click(menuButton);
    expect(screen.getByRole("navigation")).toHaveClass("hidden md:flex");
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Header />);

    fireEvent.click(screen.getByRole("button", { name: /toggle menu/i }));
    const link = screen.getByText("Home");

    // Click a link
    fireEvent.click(link);

    // Expect menu to close
    expect(screen.getByRole("navigation")).toHaveClass("hidden md:flex");
  });

  it("applies custom className if provided", () => {
    render(<Header className="test-class" />);
    const header = screen.getByRole("banner"); // `header` element has the `banner` role
    expect(header).toHaveClass("test-class");
  });
});
