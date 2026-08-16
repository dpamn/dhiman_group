import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone?: "dark" | "light";
  compact?: boolean;
  variant?: "wordmark" | "full";
};

export function Logo({
  tone = "dark",
  compact = false,
  variant = "wordmark",
}: LogoProps) {
  if (variant === "full") {
    return (
      <Link
        href="/"
        className="inline-flex shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        aria-label="Dhiman Group home"
      >
        <Image
          src="/images/dhiman-group-logo.png"
          alt=""
          width={544}
          height={450}
          sizes="(min-width: 640px) 180px, 150px"
          className="h-auto w-[8.75rem] object-contain sm:w-[10.5rem]"
        />
      </Link>
    );
  }

  const primaryText = tone === "light" ? "text-white" : "text-brand-navy";
  const secondaryText = tone === "light" ? "text-slate-300" : "text-slate-500";

  return (
    <Link
      href="/"
      className="inline-flex min-h-11 max-w-[min(100%,16rem)] shrink-0 items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:gap-2.5"
      aria-label="Dhiman Group home"
    >
      <span className="relative h-10 w-[5.75rem] shrink-0 sm:h-11 sm:w-[6.75rem]">
        <Image
          src="/images/dhiman-group-mark.png"
          alt=""
          fill
          priority
          sizes="108px"
          className="object-contain object-left drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
        />
      </span>
      <span className="hidden min-w-0 leading-none sm:block">
        <span
          className={`block font-display text-[0.95rem] font-extrabold tracking-normal sm:text-base ${primaryText}`}
        >
          DHIMAN GROUP
        </span>
        {!compact ? (
          <span
            className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-normal sm:text-[0.68rem] ${secondaryText}`}
          >
            Engineering &amp; Agriculture
          </span>
        ) : null}
      </span>
    </Link>
  );
}
