import {
  AppRouterContext,
  AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import * as Router from "next/navigation";
import React from "react";

import Search, { SearchSkeleton } from "../../src/components/Search";

const sizes = [
  [375, 667],
  [768, 1024],
  [1024, 768],
];

describe("Search", () => {
  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it("should render and display correctly", () => {
        const router = {
          push: cy.stub().as("router:push"),
        } as unknown as AppRouterInstance;
        cy.stub(Router, "useRouter").returns(router);

        const params = new URLSearchParams({});

        cy.mount(
          <AppRouterContext.Provider value={router}>
            <SearchParamsContext.Provider value={params}>
              <Search />
            </SearchParamsContext.Provider>
          </AppRouterContext.Provider>
        );

        cy.get(".form-floating").should("be.visible").matchImageSnapshot();

        cy.get("input[type='search']")
          .should("be.visible")
          .and("have.value", "");
        cy.get(".progress").should("not.exist");
      });

      it("should render and display with default value correctly", () => {
        const router = {
          push: cy.stub().as("router:push"),
        } as unknown as AppRouterInstance;
        cy.stub(Router, "useRouter").returns(router);

        const params = new URLSearchParams({ q: "US" });

        cy.mount(
          <AppRouterContext.Provider value={router}>
            <SearchParamsContext.Provider value={params}>
              <Search />
            </SearchParamsContext.Provider>
          </AppRouterContext.Provider>
        );

        cy.get(".form-floating").should("be.visible").matchImageSnapshot();

        cy.get("input[type='search']")
          .should("be.visible")
          .and("have.value", "US");
        cy.get(".progress").should("not.exist");
      });

      it("should render and display a progress bar correctly", () => {
        const router = {
          push: cy.stub().as("router:push"),
        } as unknown as AppRouterInstance;
        cy.stub(Router, "useRouter").returns(router);

        const params = new URLSearchParams({});

        cy.stub(React, "useTransition").returns([
          true,
          cy.stub().as("start-transition"),
        ]);

        cy.mount(
          <AppRouterContext.Provider value={router}>
            <SearchParamsContext.Provider value={params}>
              <Search />
            </SearchParamsContext.Provider>
          </AppRouterContext.Provider>
        );

        cy.get(".form-floating").should("be.visible").matchImageSnapshot();

        cy.get("input[type='search']").should("be.visible");
        cy.get(".progress").should("be.visible");
      });
    });
  });
});

describe("SearchSkeleton", () => {
  sizes.forEach((size) => {
    describe(`${size[0]}x${size[1]} screen`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1]);
      });

      it("should render and display correctly", () => {
        cy.mount(<SearchSkeleton />);

        cy.get(".form-floating").should("be.visible").matchImageSnapshot();

        cy.get("input[type='search']").should("be.visible").and("be.disabled");
        cy.get(".progress").should("not.exist");
      });
    });
  });
});
