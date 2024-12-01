import React from "react";

import { readCountries } from "@/actions/countries";

export default async function Countries({ q }: { q: string }) {
  const { countries } = await readCountries({ q });

  return (
    <div className="card bg-body-secondary border-0">
      <div className="card-body">
        <table className="table mb-0">
          <thead>
            <tr>
              <th
                className="fw-normal text-body-secondary"
                scope="col"
                style={{ width: 100 }}
              >
                Code
              </th>

              <th className="fw-normal text-body-secondary" scope="col">
                Name
              </th>
            </tr>
          </thead>

          <tbody>
            {countries.map((item) => (
              <tr key={item.code}>
                <th scope="row">{item.code}</th>
                <td>{item.name}</td>
              </tr>
            ))}

            {countries.length === 0 && (
              <tr>
                <td className="fst-italic" colSpan={2}>
                  No countries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CountrySkeleton() {
  return (
    <tr>
      <th aria-label="Code" scope="row">
        <span className="placeholder-glow">
          <span className="placeholder col-6" />
        </span>
      </th>

      <td aria-label="Name">
        <span className="placeholder-glow">
          <span className="placeholder col-6" />
        </span>
      </td>
    </tr>
  );
}

export function CountriesSkeleton() {
  return (
    <div className="card bg-body-secondary border-0">
      <div className="card-body">
        <table className="table mb-0">
          <thead>
            <tr>
              <th
                className="fw-normal text-body-secondary"
                scope="col"
                style={{ width: 100 }}
              >
                Code
              </th>

              <th className="fw-normal text-body-secondary" scope="col">
                Name
              </th>
            </tr>
          </thead>

          <tbody>
            {[...Array(5)].fill(null).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <CountrySkeleton key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
