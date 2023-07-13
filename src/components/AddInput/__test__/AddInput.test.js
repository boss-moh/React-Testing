import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

describe("Test Our Component Add Input", () => {
  it("it Should Be Inside Document", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });

  it("It Will Change The Value Of It When Any One Write", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, {
      target: { value: "learn Testing" },
    });
    expect(inputElement.value).toBe("learn Testing");
  });
  it("It Should Be Empty When The Button Is Clicked ", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "learn Testing" } });
    const addButton = screen.getByText(/add/i);
    fireEvent.click(addButton);
    expect(inputElement.value).toBe("");
  });
});
