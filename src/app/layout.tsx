import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import { Provider } from "../components/ui/provider";
import ScrollButton from "../components/ScrollButton";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Menu from "../components/Menu";
import logo from "../../public/assets/images/logo.png";

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
				<Provider>
					<Box as="div" bg="background">
						<HStack
							as="header"
							width="100%"
							justifyContent="space-between"
							maxWidth="breakpoint-xl"
							p="1em"
							position="sticky"
							top={0}
							left={0}
							right={0}
							m="auto"
							zIndex={1000}
						>
							<Image src={logo.src} alt="Logo" width={15} height={15} />

							<Menu />
						</HStack>

						{children}

						<ScrollButton id="main" position="fixed" bottom="1em" right={0}>
							<FaArrowAltCircleUp />
						</ScrollButton>
					</Box>
				</Provider>
			</body>
		</html>
	);
}
