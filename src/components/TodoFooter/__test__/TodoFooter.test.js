import { screen, render } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

//  Invariant failed: You should not use <Link> outside a <Router>

const MockComponentToProvide = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Todo Footer Test", () => {
  it("test our third lab", () => {
    render(<MockComponentToProvide numberOfIncompleteTasks={14} />);
    const todo = screen.getByText("14 tasks left");
    expect(todo).toBeInTheDocument();
  });

  it("test Todo Component", () => {
    render(<MockComponentToProvide numberOfIncompleteTasks={1} />);
    const todo = screen.getByText("1 task left");
    expect(todo).toBeTruthy();
  });
});

// it("test Todo Component", () => {
//   render(<MockComponentToProvide numberOfIncompleteTasks={1} />);
//   const todo = screen.getByText("1 task left");
//   expect(todo).not.toBeNull();
// });

// it("test Todo Component Text Content", () => {
//   render(<MockComponentToProvide numberOfIncompleteTasks={1} />);
//   const todo = screen.getByText("1 task left");
//   expect(todo.textContent).toBe("1 task left");
// });

// it("test Todo Component Html", () => {
//   render(<MockComponentToProvide numberOfIncompleteTasks={1} />);
//   const todo = screen.getByText("1 task left");
//   expect(todo).toContainHTML("p");
// });
// it("test Todo toBe inside Html", () => {
//   render(<MockComponentToProvide numberOfIncompleteTasks={1} />);
//   const todo = screen.getByText("1 task left");
//   expect(todo).toBeInTheDocument();
// });
// it("test Todo toBe Visible", () => {
//   render(<MockComponentToProvide numberOfIncompleteTasks={1} />);
//   const todo = screen.getByText("1 task left");
//   expect(todo).toBeVisible();
// });
