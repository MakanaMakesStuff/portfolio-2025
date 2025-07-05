import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import { Provider } from "@/components/ui/provider";

const shareTech = Share_Tech({
	variable: "--font-share-tech",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Makanaokeakua Edward's Portfolio",
	description:
		"My web portfolio containing years of my contributions and projects",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${shareTech.variable}`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
