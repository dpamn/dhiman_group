import type { SocialLink } from "@/types/site";

const socialConfig = [
  { label: "LinkedIn", envKey: "NEXT_PUBLIC_LINKEDIN_URL" },
  { label: "Facebook", envKey: "NEXT_PUBLIC_FACEBOOK_URL" },
  { label: "Instagram", envKey: "NEXT_PUBLIC_INSTAGRAM_URL" },
  { label: "YouTube", envKey: "NEXT_PUBLIC_YOUTUBE_URL" },
] as const;

function readSocialUrl(envKey: string): string | undefined {
  const value = process.env[envKey]?.trim();
  if (!value || value === "#" || value === "#contact") {
    return undefined;
  }
  return value;
}

/** Returns only social links with configured, non-placeholder URLs. */
export function getSocialLinks(): SocialLink[] {
  return socialConfig.flatMap(({ label, envKey }) => {
    const href = readSocialUrl(envKey);
    return href ? [{ label, href }] : [];
  });
}
