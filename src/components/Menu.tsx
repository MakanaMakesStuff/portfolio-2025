/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
	HStack,
	Link as CHLink,
	useDisclosure,
	VStack,
	Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { MenuContent, MenuRoot, MenuTrigger } from "@/src/components/ui/menu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Menu() {
	const { open, onToggle } = useDisclosure();

	return (
		<>
			<HStack
				as="nav"
				bg="secondaryToWhite"
				borderRadius="0.25em"
				p="0.5em 1em"
				gap="1em"
				display={
					{
						base: "flex",
						contentWidthDown: "none",
					} as any
				}
			>
				<CHLink color="whiteToSecondary" outline="none" asChild>
					<Link href="/">Home</Link>
				</CHLink>

				<CHLink color="whiteToSecondary" outline="none" asChild>
					<Link href="#projects">Projects</Link>
				</CHLink>

				<CHLink color="whiteToSecondary" outline="none" asChild>
					<Link href="#about">About</Link>
				</CHLink>

				<CHLink color="whiteToSecondary" outline="none" asChild>
					<Link href="#contact">Contact</Link>
				</CHLink>

				<CHLink
					color="whiteToSecondary"
					borderRadius="0.25em"
					transition="all 0.2s ease-in-out"
					_hover={{
						bg: "secondary",
						color: "white",
					}}
					outline="none"
					asChild
				>
					<Link href="">
						<FaGithub />
					</Link>
				</CHLink>

				<CHLink
					color="whiteToSecondary"
					borderRadius="0.25em"
					transition="all 0.2s ease-in-out"
					_hover={{
						bg: "secondary",
						color: "white",
					}}
					outline="none"
					asChild
				>
					<Link href="">
						<FaLinkedin />
					</Link>
				</CHLink>
			</HStack>

			<MenuRoot open={open} onOpenChange={onToggle}>
				<MenuTrigger
					display={
						{
							base: "flex",
							contentWidth: "none",
						} as any
					}
					cursor="pointer"
					border="unset"
					outline="unset"
					zIndex={3}
				>
					<VStack gap={0} height="1.25em" width="1.25em" position="relative">
						<Box
							position="absolute"
							backgroundColor={open ? "whiteToSecondary" : "white"}
							width="1.5em"
							height="3px"
							top={open ? "8px" : "0px"}
							rotate={open ? "45deg" : "0deg"}
							transition="all 0.25s ease"
						/>
						<Box
							position="absolute"
							backgroundColor={open ? "whiteToSecondary" : "white"}
							width="1.5em"
							height="3px"
							top="8px"
							opacity={open ? 0 : 1}
							transition="all 0.25s ease"
						/>
						<Box
							position="absolute"
							backgroundColor={open ? "whiteToSecondary" : "white"}
							width="1.5em"
							height="3px"
							top={open ? "8px" : "16px"}
							rotate={open ? "-45deg" : "0deg"}
							transition="all 0.25s ease"
						/>
					</VStack>
				</MenuTrigger>

				<MenuContent
					portalled={false}
					backgroundColor="secondaryToWhite"
					width="100%"
					padding="1em"
					borderRadius={0}
					top="0"
					boxSizing="border-box"
					left={0}
					position="absolute"
					display={
						{
							base: "flex",
							contentWidth: "none",
						} as any
					}
					shadow="unset"
					asChild
					zIndex={1}
					withoutPositioner
				>
					<VStack
						as="nav"
						bg="secondary"
						borderRadius="0.25em"
						p="0.5em 1em"
						gap="1em"
					>
						<CHLink color="whiteToSecondary" outline="none" asChild>
							<Link href="/">Home</Link>
						</CHLink>

						<CHLink color="whiteToSecondary" outline="none" asChild>
							<Link href="#projects">Projects</Link>
						</CHLink>

						<CHLink color="whiteToSecondary" outline="none" asChild>
							<Link href="#about">About</Link>
						</CHLink>

						<CHLink color="whiteToSecondary" outline="none" asChild>
							<Link href="#contact">Contact</Link>
						</CHLink>

						<CHLink
							color="whiteToSecondary"
							borderRadius="0.25em"
							transition="all 0.2s ease-in-out"
							_hover={{
								bg: "secondary",
								color: "white",
							}}
							outline="none"
							asChild
						>
							<Link href="">
								<FaGithub />
							</Link>
						</CHLink>

						<CHLink
							color="whiteToSecondary"
							borderRadius="0.25em"
							transition="all 0.2s ease-in-out"
							_hover={{
								bg: "secondary",
								color: "white",
							}}
							outline="none"
							asChild
						>
							<Link href="">
								<FaLinkedin />
							</Link>
						</CHLink>
					</VStack>
				</MenuContent>
			</MenuRoot>
		</>
	);
}
