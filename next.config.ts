import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// 	/* config options here */
// 	output: "export",
// 	distDir: "dist",
// 	experimental: {
// 		optimizePackageImports: ["@chakra-ui/react"],
// 	},
// 	images: {
// 		unoptimized: true,
// 	},
// };

const nextConfig: NextConfig = {
	/* config options here */
	basePath: "/portfolio-2025",
	output: "export",
	reactStrictMode: true,
	assetPrefix: "/portfolio-2025/",
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
