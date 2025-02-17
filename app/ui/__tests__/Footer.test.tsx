import { render, screen } from "@testing-library/react";
import Footer from "@/app/ui/Footer"; // Adjust path if needed
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("renders the Footer component with correct content", () => {
    render(<Footer />);

    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Check if the footer contains the correct copyright text
    expect(
      screen.getByText(`© ${currentYear} Kate Portalatin. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it("applies custom className if provided", () => {
    render(<Footer className="test-class" />);
    const footer = screen.getByRole("contentinfo"); // Footer element should have this role
    expect(footer).toHaveClass("test-class");
  });
});
