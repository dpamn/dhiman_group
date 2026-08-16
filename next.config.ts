import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/naman-agro/products/pto-power-sprayer",
        destination: "/naman-agro/products/tractor-mounted-spray-machine",
        permanent: true,
      },
      {
        source: "/naman-agro/products/trailed-agricultural-sprayer",
        destination: "/naman-agro/products/trailer-ibc-spray-machine",
        permanent: true,
      },
      {
        source: "/naman-agro/products/ibc-tank-sprayer-trailer",
        destination: "/naman-agro/products/trailer-ibc-spray-machine",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

