import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders App form correctly", () => {
    render(<App />);
    // :white_check_mark: Input fields
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    // :white_check_mark: Labels
    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    // :white_check_mark: Button
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
});
