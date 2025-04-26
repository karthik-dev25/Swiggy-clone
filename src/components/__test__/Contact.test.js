import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact Us Page Test Cases', () => {
    test("Should load the Contact Us Component", () => {
        render(<Contact />);
      
        const heading = screen.getByRole("heading");
      
        // Assertion
        expect(heading).toBeInTheDocument();
      });
      
      test("Should load the button inside the Contact Component", () => {
          render(<Contact />);
        
          const button = screen.getByRole("button");
        
          // Assertion
          expect(button).toBeInTheDocument();
        });
      
      test("Should load the button inside the Contact Component", () => {
        render(<Contact />);
      
        const button = screen.getByText("Submit");
      
        // Assertion
        expect(button).toBeInTheDocument();
      });
      
      it("Should load the textBoxes inside the Contact Component",()=>{
          render(<Contact/>);
      
          const textBoxes = screen.getAllByRole("textbox");
      
          // Assertion
          expect(textBoxes.length).toBe(2);
      })
});
