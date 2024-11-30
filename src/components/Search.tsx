"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useCallback, useTransition } from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      startTransition(() => {
        const raw = new URLSearchParams(searchParams.toString());

        raw.set("q", event.target.value);

        const result = raw.toString();

        router.push(`?${result}`, { scroll: false });
      });
    },
    [router, searchParams],
  );

  return (
    <div className="p-3 rounded-bottom position-relative overflow-hidden">
      <div className="form-floating">
        <input
          autoComplete="off"
          className="form-control"
          defaultValue={q}
          id="search__input"
          name="q"
          onChange={handleChange}
          placeholder="Search"
          type="search"
        />

        <label htmlFor="search__input">Search</label>
      </div>

      {isPending && (
        <div
          aria-label="Progress bar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={100}
          className="progress position-absolute bottom-0 start-0 end-0"
          role="progressbar"
          style={{ height: 1 }}
        >
          <div className="progress-bar indeterminate-progress-bar" />
        </div>
      )}
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <div className="p-3 rounded-bottom position-relative overflow-hidden">
      <div className="form-floating">
        <input
          autoComplete="off"
          className="form-control"
          disabled
          placeholder="Search"
          type="search"
        />

        <label htmlFor="search__input">Search</label>
      </div>
    </div>
  );
}
