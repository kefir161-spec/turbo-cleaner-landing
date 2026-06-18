import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Все материалы локальные и уже оптимизированы; раздаём современные форматы.
    formats: ["image/avif", "image/webp"],
  },
  // Усиленные заголовки безопасности (Best Practices).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
