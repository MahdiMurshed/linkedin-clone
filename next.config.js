/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rb.gy"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  baseUrl: ".",
};

module.exports = nextConfig;
