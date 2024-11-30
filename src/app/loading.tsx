import React from "react";

import { CountriesSkeleton } from "@/components/Countries";
import { SearchSkeleton } from "@/components/Search";

export default function Loading() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-12 col-lg-6 mx-auto">
          <div className="text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">Hello</h1>

            <p className="lead m-0">
              Start typing the country code to filter results
            </p>
          </div>
        </div>
      </div>

      <div className="row sticky-top mb-3">
        <div className="col-12 col-lg-6 mx-auto">
          <SearchSkeleton />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-lg-6 mx-auto">
          <CountriesSkeleton />
        </div>
      </div>
    </div>
  );
}
