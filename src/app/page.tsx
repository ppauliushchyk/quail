import React from "react";

import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">Hello</h1>

            <p className="lead mb-4">
              Start typing the country code to filter results
            </p>

            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
