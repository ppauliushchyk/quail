import React from "react";

import NodFound from "../../../src/app/not-found";

const sizes = [
  [375, 667],
  [768, 1024],
  [1024, 768],
];

describe("NodFound", () => {
  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it("should render and display correctly", () => {
        cy.mount(<NodFound />);

        cy.get(".container").should("be.visible").matchImageSnapshot();

        cy.get("h1").should("be.visible").should("have.text", "Not Found");
        cy.get("p")
          .should("be.visible")
          .should(
            "have.text",
            "Looks like you took a wrong turn at Albuquerque. 👽"
          );
      });
    });
  });
});
