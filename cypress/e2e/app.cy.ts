describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("page loads successfully", () => {
    cy.get("input[type='search']").should("be.visible");
    cy.get("table").should("be.visible");
    cy.get("table tbody tr").should("have.length", 250);
  });

  it("filters countries correctly", () => {
    cy.get("input[type='search']").type("US");
    cy.get("table tbody tr").should("have.length", 1);
    cy.contains("td", "United States");

    cy.get("input[type='search']").clear().type("CA");
    cy.get("table tbody tr").should("have.length", 1);
    cy.contains("td", "Canada");

    cy.get("input[type='search']").clear();
    cy.get("table tbody tr").should("have.length", 250);
  });

  it("handles case sensitivity", () => {
    cy.get("input[type='search']").type("us");
    cy.get("table tbody tr").should("have.length", 1);
    cy.contains("td", "United States");
  });

  it("handles invalid input", () => {
    cy.get("input[type='search']").type("XYZ");
    cy.get("table tbody tr").should("have.length", 1);
    cy.contains("td", "No countries found");
  });
});
