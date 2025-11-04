import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { WelcomeContextProvider } from "@/sections/welcome/context";
import WelcomePeopleCreate from "../WelcomePeopleCreate";

beforeEach(cleanup);
const save = vi.fn();
const repository = {
  save,
  get: vi.fn(),
  getAll: vi.fn(),
};

describe("Tag Component", () => {
  it("should render a component of form and filled , and click in the submit button", async () => {
    render(
      <WelcomeContextProvider repository={repository}>
        <WelcomePeopleCreate />
      </WelcomeContextProvider>
    );

    const inputName = screen.getByPlaceholderText("Enter full name");
    await userEvent.type(inputName, "Cristian");
    const inputImage = screen.getByPlaceholderText(
      "https://example.com/image.jpg"
    );
    await userEvent.type(inputImage, "https://cristianfonseca.dev/logo.png");
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    expect(save).toHaveBeenCalled();
  });
  it("should render a message of error in case of type error in inputs textbox", async () => {
    render(
      <WelcomeContextProvider repository={repository}>
        <WelcomePeopleCreate />
      </WelcomeContextProvider>
    );

    const inputName = screen.getByPlaceholderText("Enter full name");
    await userEvent.type(inputName, "Cr");
    const inputImage = screen.getByPlaceholderText(
      "https://example.com/image.jpg"
    );
    await userEvent.type(inputImage, "https://cristianfonseca.de");
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const alerts = screen.getAllByRole("alert");
    expect(alerts).toHaveLength(2);
    expect(alerts[0].textContent).toMatch("Name must be at least 3 characters");
    expect(alerts[1].textContent).toMatch("Must be a valid image URL");
  });
});
