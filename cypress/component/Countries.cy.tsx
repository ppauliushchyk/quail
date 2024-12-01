import React from "react";

import {
  CountrySkeleton,
  CountriesSkeleton,
} from "../../src/components/Countries";

const sizes = [
  [375, 667],
  [768, 1024],
  [1024, 768],
];

describe("CountrySkeleton", () => {
  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it(`should render and display correctly`, () => {
        cy.mount(<CountrySkeleton />);

        cy.get("tr").should("be.visible").matchImageSnapshot();
      });
    });
  });
});

describe("CountriesSkeleton", () => {
  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it(`should render and display correctly`, () => {
        cy.mount(<CountriesSkeleton />);

        cy.get(".card").should("be.visible").matchImageSnapshot();

        cy.get("table").should("be.visible");
        cy.get("table thead tr").should("have.length", 1);
        cy.get("table tbody tr").should("have.length", 5);
      });
    });
  });
});
