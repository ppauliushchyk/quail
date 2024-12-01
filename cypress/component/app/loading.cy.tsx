import React from "react";

import Loading from "../../../src/app/loading";

const sizes = [
  [375, 667],
  [768, 1024],
  [1024, 768],
];

describe("Loading", () => {
  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it("should render and display correctly", () => {
        cy.mount(<Loading />);

        cy.get(".container").should("be.visible").matchImageSnapshot();

        cy.get("input[type='search']").should("be.visible");
        cy.get(".card").should("be.visible");
        cy.get("table").should("be.visible");
        cy.get("table thead tr").should("have.length", 1);
        cy.get("table tbody tr").should("have.length", 5);
      });
    });
  });
});
