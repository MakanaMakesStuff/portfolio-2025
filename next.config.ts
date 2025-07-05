import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	distDir: "dist",
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
