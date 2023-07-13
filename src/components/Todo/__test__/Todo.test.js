import { screen, render, fireEvent } from "@testing-library/react";
import Todo from "./../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const AddTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const button = screen.getByText(/add/i);
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(button);
  });
};

describe("Test Todo Component (Test Two Component Function)", () => {
  it("Test If Component render or not", () => {
    render(<MockTodo />);
  });
  it("Test When I Add Task It is Add it to List Or not", () => {
    render(<MockTodo />);
    AddTask(["Learn Testing"]);
    const taskElement = screen.getByText("Learn Testing");
    expect(taskElement).toBeInTheDocument();
  });
  it("Test When I Add Task It Should Don't Have Class Active", () => {
    render(<MockTodo />);
    AddTask(["Learn Testing"]);
    const taskElement = screen.getByText("Learn Testing");
    expect(taskElement).not.toHaveClass("todo-item-active");
  });
  it("Test When I Add Task It Should Don't Have Class Active", () => {
    render(<MockTodo />);
    AddTask(["Learn Testing", "Test Our Website", "Learn Next"]);
    const taskElements = screen.getAllByTestId("task-container");
    expect(taskElements.length).toBe(3);
  });
});
