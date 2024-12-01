const sizes = [
  [375, 667],
  [768, 1024],
  [1024, 768],
];

describe("page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it("page loads successfully", () => {
        cy.get(".container").should("be.visible");

        cy.get("input[type='search']").should("be.visible");
        cy.get(".card").should("be.visible");
        cy.get("table").should("be.visible");
        cy.get("table thead tr").should("have.length", 1);
        cy.get("table tbody tr").should("have.length", 250);
      });

      it("filters countries correctly", () => {
        cy.get(".container").should("be.visible");

        cy.get("input[type='search']").should("be.visible");
        cy.get(".card").should("be.visible");
        cy.get("table").should("be.visible");
        cy.get("table thead tr").should("have.length", 1);

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
        cy.get(".container").should("be.visible");

        cy.get("input[type='search']").should("be.visible");
        cy.get(".card").should("be.visible");
        cy.get("table").should("be.visible");
        cy.get("table thead tr").should("have.length", 1);

        cy.get("input[type='search']").type("us");
        cy.get("table tbody tr").should("have.length", 1);
        cy.contains("td", "United States");
      });

      it("handles invalid input", () => {
        cy.get(".container").should("be.visible");

        cy.get("input[type='search']").should("be.visible");
        cy.get(".card").should("be.visible");
        cy.get("table").should("be.visible");
        cy.get("table thead tr").should("have.length", 1);

        cy.get("input[type='search']").type("XYZ");
        cy.get("table tbody tr").should("have.length", 1);
        cy.contains("td", "No countries found");
      });
    });
  });
});

describe("not-found", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/test", { failOnStatusCode: false });
  });

  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it("page loads successfully", () => {
        cy.get(".container").should("be.visible");

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
