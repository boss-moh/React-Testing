import { screen, render } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Testing Our Followers List ", () => {
  it("It should be render one  component Followser", async () => {
    render(<MockFollowersList />);
    const followerItemElement = await screen.findByTestId("follower-item-0");
    expect(followerItemElement).toBeInTheDocument();
  });

  // it("It Should Render Five Elements In Request ", async () => {
  //   render(<MockFollowersList />);
  //   const followerItemsElements = await screen.findAllByTestId(
  //     /follower-item-\d/i
  //   );
  //   expect(followerItemsElements.length).toBe(5);
  // });
});
