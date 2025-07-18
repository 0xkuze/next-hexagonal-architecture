import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import WelcomePeopleCard from "../WelcomePeopleCard";

beforeEach(cleanup);
const mockedPeople = {
  id: "1",
  name: "Cristian",
  imageUrl: "https://avatars.githubusercontent.com/u/7153498?v=4.jpg",
};
describe("Tag Component", () => {
  test("should render", () => {
    render(<WelcomePeopleCard people={mockedPeople} />);
    const image = screen.getByAltText("Cristian-image");
    expect(image).toBeDefined();
    const name = screen.getByText("Cristian");
    expect(name).toBeDefined();
  });
});
