"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { CatalogCard } from "./CatalogCard";
import type { CatalogEntry } from "@/lib/catalog-data";

type CatalogSearchProps = {
  catalogs: CatalogEntry[];
  catalogPath: string;
  categories: string[];
};

export function CatalogSearch({
  catalogs,
  catalogPath,
  categories,
}: CatalogSearchProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return catalogs.filter((catalog) => {
      const matchesCategory =
        activeCategory === "All" || catalog.category === activeCategory;
      const searchLower = query.toLowerCase().trim();
      const matchesQuery =
        !searchLower ||
        catalog.title.toLowerCase().includes(searchLower) ||
        catalog.description.toLowerCase().includes(searchLower) ||
        catalog.category.toLowerCase().includes(searchLower);
      return matchesCategory && matchesQuery;
    });
  }, [catalogs, activeCategory, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            aria-hidden="true"
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search catalogs..."
            aria-label="Search catalogs"
            className="w-full rounded-control border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-brand-navy placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green/30"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-control px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-brand-green ${
              activeCategory === category
                ? "bg-brand-navy text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((catalog) => (
            <CatalogCard
              key={catalog.id}
              catalog={catalog}
              catalogPath={catalogPath}
            />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-center text-slate-500">
          No catalogs match your search. Try a different term or category.
        </p>
      )}
    </div>
  );
}
