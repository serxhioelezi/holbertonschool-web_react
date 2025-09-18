import { render, screen } from "@testing-library/react";
import App from "./App";
import { getCurrentYear } from "./utils";

test("renders 'School Dashboard' h1 element", () => {
  render(<App />);
  
  // Title
  const titleElement = screen.getByRole("heading", { level: 1, name: /school dashboard/i });
  expect(titleElement).toBeInTheDocument();

  // Body text
  const bodyText = screen.getByText(/login to access the full dashboard/i);
  expect(bodyText).toBeInTheDocument();

  // Footer text
  const footerText = screen.getByText(/copyright/i);
  expect(footerText).toBeInTheDocument();

  // Image element
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();

  // Inputs (email + password)
  const inputs = screen.getAllByRole("textbox"); // only 1 textbox (email)
  const passwordInput = screen.getByLabelText(/password/i);
  expect(inputs.length).toBe(1);
  expect(passwordInput).toBeInTheDocument();

  // Labels
  const emailLabel = screen.getByLabelText(/email/i);
  const passwordLabel = screen.getByLabelText(/password/i);
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();

  // Button
  const button = screen.getByRole("button", { name: /ok/i });
  expect(button).toBeInTheDocument();
});

test("getCurrentYear returns the current year", () => {
  const year = new Date().getFullYear();
  expect(getCurrentYear()).toBe(year);
});
