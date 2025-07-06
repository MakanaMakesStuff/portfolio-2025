"use client";

import {
	Image as CHImage,
	Link as CHLink,
	Separator,
	SimpleGrid,
	StackProps,
	Text,
	VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

// Logo
import logo from "../../public/assets/images/logo.png";
import { useColorMode } from "./ui/color-mode";

export default function Footer({ ...props }: StackProps) {
	const { colorMode } = useColorMode();
	const today = dayjs();

	return (
		<VStack
			as="footer"
			p="2em"
			width="100%"
			gap="5em"
			color="secondaryToWhite"
			{...props}
		>
			<CHImage
				filter={
					colorMode == "light"
						? "invert(48%) sepia(17%) saturate(1000%) hue-rotate(232deg) brightness(95%) contrast(90%)"
						: "white"
				}
				asChild
			>
				<Image src={logo.src} width={15} height={15} alt="Footer Logo" />
			</CHImage>

			<SimpleGrid
				gridTemplateColumns="12ch 1fr 12ch"
				alignItems="stretch"
				gap="0"
			>
				<VStack justifyContent="center" alignItems="flex-end" p="2em">
					<CHLink
						borderRadius="0.25em"
						transition="all 0.2s ease-in-out"
						outline="none"
						asChild
					>
						<Link href="">
							<FaArrowUp />
						</Link>
					</CHLink>

					<CHLink outline="none" asChild>
						<Link href="#about">About</Link>
					</CHLink>

					<CHLink outline="none" asChild>
						<Link href="#contact">Contact</Link>
					</CHLink>
				</VStack>

				<Separator
					orientation="vertical"
					borderColor="secondaryToWhite"
					borderWidth="1px"
				/>

				<VStack justifyContent="center" p="2em" alignItems="flex-start">
					<CHLink
						borderRadius="0.25em"
						transition="all 0.2s ease-in-out"
						outline="none"
						asChild
					>
						<Link href="https://github.com/MakanaMakesStuff">
							<FaGithub />
						</Link>
					</CHLink>

					<CHLink
						borderRadius="0.25em"
						transition="all 0.2s ease-in-out"
						outline="none"
						asChild
					>
						<Link href="">
							<FaLinkedin />
						</Link>
					</CHLink>
				</VStack>
			</SimpleGrid>

			<Text textAlign="center">
				Copyright @ {today.year()} Makanaokeakua Edwards All rights reserved
			</Text>
		</VStack>
	);
}
