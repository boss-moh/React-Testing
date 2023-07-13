import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Header Test . Test If Header accept the prop", () => {
  render(<Header title="To Do" />);
  const headerElement = screen.getByText(/To Do/i);
  expect(headerElement).toBeInTheDocument();
});

// it("Test Our Header Component", () => {
//   render(<Header title="Testing" />);
//   const headingElement = screen.getByText("Testing");
//   expect(headingElement).toBeInTheDocument();
// });

// // some times therea are many heading in same page so use name (text)
// it("Test with getByRoll", () => {
//   render(<Header title="Testing" />);
//   const headingElement = screen.getByRole("heading", { name: "cats" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("Test with Test id ", () => {
//   render(<Header title="Testing" />);
//   const headingElement = screen.getByTestId("heading-1");
//   expect(headingElement).toBeInTheDocument();
// });

// // find use it with await
// it("Test with Test id find test ", async () => {
//   render(<Header title="Testing" />);
//   const headingElement = await screen.findByText("Testing");
//   expect(headingElement).toBeInTheDocument();
// });

// // usaully you use query to test if the element is not in the document
// // queryBy
// // not.toBeInTheDocument()
// // use it when you need to test there is't element in document
// it("Test with query ", () => {
//   render(<Header title="Testing" />);
//   const headingElement = screen.queryByText("s");
//   expect(headingElement).not.toBeInTheDocument();
// });

// it("test number of heading", () => {
//   render(<Header title={"X Company"} />);
//   const headingELements = screen.getAllByRole("heading");
//   expect(headingELements.length).toBe(2);
// });
