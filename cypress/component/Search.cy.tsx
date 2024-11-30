import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import * as Router from "next/navigation";

import Search, { SearchSkeleton } from "../../src/components/Search";

describe("Search", () => {
  it("should render and display correctly", () => {
    const router = { push: cy.stub().as("router:push") };

    cy.stub(Router, "useRouter").returns(router);

    const params = new URLSearchParams({ q: null });

    cy.mount(
      <AppRouterContext.Provider value={router}>
        <SearchParamsContext.Provider value={params}>
          <Search />
        </SearchParamsContext.Provider>
      </AppRouterContext.Provider>
    );

    cy.get("input[type='search']").should("be.visible");
  });

  it("should render and display with default value correctly", () => {
    const router = { push: cy.stub().as("router:push") };

    cy.stub(Router, "useRouter").returns(router);

    const params = new URLSearchParams({ q: "US" });

    cy.mount(
      <AppRouterContext.Provider value={router}>
        <SearchParamsContext.Provider value={params}>
          <Search />
        </SearchParamsContext.Provider>
      </AppRouterContext.Provider>
    );

    cy.get("input[type='search']")
      .should("be.visible")
      .should("have.value", "US");
  });
});

describe("SearchSkeleton", () => {
  it("should render and display correctly", () => {
    cy.mount(<SearchSkeleton />);

    cy.get("input[type='search']").should("be.visible");
  });
});
