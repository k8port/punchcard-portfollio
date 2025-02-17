import { render, screen } from "@testing-library/react";
import AboutMe from "../AboutMe";

// Mock Punchard component bc it is external dependency
jest.mock("@/app/ui/Punchcard", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="punchcard">{children}</div>
  ),
}));

const mockContent = {
  who: { text: "I'm a software engineer.", label: "Who" },
  what: { text: "I build scalable cloud native solutions.", label: "What" },
  why: { text: "I love engineering.", label: "Why" },
  where: { text: "Based in DFW metroplex.", label: "Where" },
  when: { text: "Since 2015.", label: "When" },
};

it("renders the AboutMe component with correct content", () => {
  render(<AboutMe label="About Me" content={mockContent} />);

  expect(screen.getByTestId("punchcard")).toBeInTheDocument();
  expect(screen.getByText("About Me")).toBeInTheDocument();
  expect(screen.getByText("[Who]:")).toBeInTheDocument();
  expect(screen.getByText("I'm a software engineer.")).toBeInTheDocument();
  expect(screen.getByText("[What]:")).toBeInTheDocument();
  expect(
    screen.getByText("I build scalable cloud native solutions.")
  ).toBeInTheDocument();
  expect(screen.getByText("[Why]:")).toBeInTheDocument();
  expect(screen.getByText("I love engineering.")).toBeInTheDocument();
  expect(screen.getByText("[Where]:")).toBeInTheDocument();
  expect(screen.getByText("Based in DFW metroplex.")).toBeInTheDocument();
  expect(screen.getByText("[When]:")).toBeInTheDocument();
  expect(screen.getByText("Since 2015.")).toBeInTheDocument();
});
