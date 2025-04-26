/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enable static export
    images: {
      unoptimized: true, // Required for exporting images
    },
};

export default nextConfig;
