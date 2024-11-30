import {
  CountrySkeleton,
  CountriesSkeleton,
} from "../../src/components/Countries";

describe("CountrySkeleton", () => {
  it("should render and display correctly", () => {
    cy.mount(<CountrySkeleton />);

    cy.get("tr").should("be.visible");
  });
});

describe("CountriesSkeleton", () => {
  it("should render and display correctly", () => {
    cy.mount(<CountriesSkeleton />);

    cy.get("table").should("be.visible");
    cy.get("table tbody tr").should("have.length", 5);
  });
});
