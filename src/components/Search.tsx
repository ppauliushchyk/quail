"use client";

import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useTransition } from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          autoComplete="off"
          className="form-control"
          defaultValue={q}
          id="search__input"
          name="q"
          onChange={(event) => {
            const raw = new URLSearchParams(searchParams.toString());

            raw.set("q", event.target.value);

            const result = raw.toString();

            startTransition(() => {
              router.push(`?${result}`, { scroll: false });
            });
          }}
          placeholder="Search"
          type="search"
        />

        <label htmlFor="search__input">Search</label>
      </div>

      <div
        aria-label="Progress bar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={100}
        className={classNames("progress", {
          invisible: !isPending,
          "opacity-0": !isPending,
        })}
        role="progressbar"
        style={{ height: 1 }}
      >
        <div className="progress-bar indeterminate-progress-bar" />
      </div>
    </div>
  );
}
