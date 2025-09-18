import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders School Dashboard with login form and footer", () => {
  render(<App />);

  // Title
  const titleElement = screen.getByRole("heading", { level: 1, name: /school dashboard/i });
  expect(titleElement).toBeInTheDocument();

  // Body text
  const bodyText = screen.getByText(/login to access the full dashboard/i);
  expect(bodyText).toBeInTheDocument();

  // Footer text (dynamic year + copyright)
  const currentYear = new Date().getFullYear();
  const footerText = screen.getByText(new RegExp(`copyright.*${currentYear}`, "i"));
  expect(footerText).toBeInTheDocument();

  // Image (logo)
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();

  // Email input
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();

  // Password input
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();

  // Labels
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // Button with text "Ok"
  const button = screen.getByRole("button", { name: /ok/i });
  expect(button).toBeInTheDocument();
});
