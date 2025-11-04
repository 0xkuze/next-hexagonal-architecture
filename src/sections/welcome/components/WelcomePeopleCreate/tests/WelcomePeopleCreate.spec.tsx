import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import WelcomePeopleCreate from "../WelcomePeopleCreate";

vi.mock("@/app/actions/people", () => ({
  createPerson: vi.fn().mockResolvedValue({ success: true }),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

beforeEach(cleanup);

describe("WelcomePeopleCreate Component", () => {
  it("should render a form and allow submission with valid data", async () => {
    const { createPerson } = await import("@/app/actions/people");

    render(<WelcomePeopleCreate />);

    const inputName = screen.getByPlaceholderText("Enter full name");
    await userEvent.type(inputName, "Cristian");
    const inputImage = screen.getByPlaceholderText(
      "https://example.com/image.jpg"
    );
    await userEvent.type(inputImage, "https://cristianfonseca.dev/logo.png");
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(createPerson).toHaveBeenCalled();
    });
  });

  it("should validate required fields using HTML5 validation", async () => {
    render(<WelcomePeopleCreate />);

    const inputName = screen.getByPlaceholderText("Enter full name");
    const inputImage = screen.getByPlaceholderText(
      "https://example.com/image.jpg"
    );

    expect(inputName).toHaveAttribute("required");
    expect(inputName).toHaveAttribute("minlength", "3");
    expect(inputName).toHaveAttribute("maxlength", "50");
    expect(inputImage).toHaveAttribute("required");
    expect(inputImage).toHaveAttribute("type", "url");
  });

  it("should display error message when server action fails", async () => {
    const { createPerson } = await import("@/app/actions/people");
    vi.mocked(createPerson).mockResolvedValueOnce({
      error: "Failed to create person",
    });

    render(<WelcomePeopleCreate />);

    const inputName = screen.getByPlaceholderText("Enter full name");
    await userEvent.type(inputName, "Cristian");
    const inputImage = screen.getByPlaceholderText(
      "https://example.com/image.jpg"
    );
    await userEvent.type(inputImage, "https://cristianfonseca.dev/logo.png");
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Failed to create person")).toBeInTheDocument();
    });
  });
});
