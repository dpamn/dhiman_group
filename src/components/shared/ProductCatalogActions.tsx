import { Download, FileText } from "lucide-react";

import { ButtonLink } from "@/components/ui";
import type { CatalogEntry } from "@/lib/catalog-data";

type ProductCatalogActionsProps = {
  brochure?: CatalogEntry;
  completeCatalogPath: string;
  contactPath: string;
};

export function ProductCatalogActions({
  brochure,
  completeCatalogPath,
  contactPath,
}: ProductCatalogActionsProps) {
  const catalogHref = brochure
    ? `${completeCatalogPath}#${brochure.id}`
    : completeCatalogPath;

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <ButtonLink href={catalogHref} className="sm:min-w-44">
        <FileText aria-hidden="true" className="size-4" />
        View Catalog
      </ButtonLink>
      {brochure?.pdf ? (
        <ButtonLink
          href={brochure.pdf}
          download={brochure.downloadFilename}
          variant="secondary"
          className="sm:min-w-44"
        >
          <Download aria-hidden="true" className="size-4" />
          Download Catalog
        </ButtonLink>
      ) : brochure ? (
        <ButtonLink href={catalogHref} variant="secondary" className="sm:min-w-44">
          <Download aria-hidden="true" className="size-4" />
          Browse Catalog
        </ButtonLink>
      ) : null}
      <ButtonLink href={contactPath} variant="ghost" className="sm:min-w-40">
        Send Inquiry
      </ButtonLink>
    </div>
  );
}
