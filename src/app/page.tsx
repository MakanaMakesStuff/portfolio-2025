/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
	Box,
	Heading,
	HStack,
	Link as CHLink,
	Text,
	VStack,
	Image as CHImage,
	Icon,
	Stack,
	SimpleGrid,
	Separator,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

// Logo
import logo from "../../public/assets/images/logo.png";
// Main profile pic
import me from "../../public/assets/images/me.jpg";
// Testimonials
import notMe from "../../public/assets/images/not me.jpg";
import jeff from "../../public/assets/images/jeff bezos.jpg";
// projects
import ul from "../../public/assets/images/projects/ul.png";
import cliffs from "../../public/assets/images/projects/cliffs.png";
import ch from "../../public/assets/images/projects/ch.png";
import vm from "../../public/assets/images/projects/vm.png";

import {
	RiNextjsFill,
	RiNodejsFill,
	RiReactjsFill,
	RiWordpressFill,
} from "react-icons/ri";
import { SiApollographql, SiChakraui } from "react-icons/si";

import { ReactNode, useEffect, useState } from "react";
import dayjs from "dayjs";
import { useColorMode } from "../components/ui/color-mode";
import MinecraftMap from "../components/MinecraftMap";
import FadeOnScroll from "../components/FadeOnSroll/FadeOnScroll";
import Splash from "../components/Splash";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";
import Menu from "../components/Menu";

export default function Home() {
	const { colorMode } = useColorMode();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// This will ensure that the component is only rendered on the client side
		setMounted(true);
	}, []);

	if (!mounted) {
		// Avoid rendering the form on the initial server render
		return null;
	}

	interface ProjectI {
		title: string;
		text: string;
		resource: {
			type: "img" | "video" | "component";
			value: ReactNode;
			url?: string;
		};
	}

	const projects: ProjectI[] = [
		{
			title: "The Unionleague of Philidelphia",
			text: "Founded in 1862 as a patriotic society to support the Union and the policies of President Abraham Lincoln, The Union League of Philadelphia laid the philosophical foundation of other Union Leagues across a nation torn by civil war. The League has hosted U.S. presidents, heads of state, industrialists, entertainers and dignitaries from around the globe and has proudly supported the American military in each conflict since the Civil War. The Union League continues to be driven by its founding motto, Amor Patriae Ducit or Love of Country Leads.",
			resource: {
				type: "img",
				value: ul.src,
				url: "https://member.unionleague.org/",
			},
		},
		{
			title: "The Cliffs | Private Luxury Communities",
			text: "At The Cliffs, we seize the day, every day. Here in the glorious Carolina mountains are seven vibrant communities — three on sparkling Lake Keowee not far from Clemson, three more high up in the cool mountain air near thriving Greenville, South Carolina, and one just minutes to the Southern gem of Asheville, North Carolina. There isn’t one that’s best, but we promise there is one just right for you. And as a member, each is yours to enjoy.",
			resource: {
				type: "img",
				value: cliffs.src,
				url: "https://members.cliffsliving.com/",
			},
		},
		{
			title: "Vicmead",
			text: "Vicmead Hunt Club, an intimate and highly sought-after private club located in Wilmington, Delaware, has been enriching the lives of its members for over a century. ",
			resource: {
				type: "img",
				value: vm.src,
				url: "https://www.vicmead.com/",
			},
		},
		{
			title: "The Carriage House",
			text: "The Carriage House...",
			resource: {
				type: "img",
				value: ch.src,
				url: "https://members.carriagehousepb.com/",
			},
		},
	];

	const personalProjects: ProjectI[] = [
		{
			title: "Turn is here!",
			text: "Turn is a simple, yet difficult game. If you think you have what it takes, go download and give it a try. Good luck.",
			resource: {
				type: "video",
				value: "/portfolio-2025/assets/videos/turn.mp4",
			},
		},
		{
			title: "Canvas Minecraft 👈",
			text: "A simple component that takes coordinates from a specified object and maps interact-able areas to the inner image(Modified to look minecrafty)",
			resource: {
				type: "component",
				value: (
					<MinecraftMap
						width={
							{
								base: "calc(50% - 1.5em)",
								contentWidthDown: "100%",
							} as any
						}
						borderRadius="0.25em"
						shadow="paper"
						flexGrow={1}
						aspectRatio={3 / 2}
						objectFit="cover"
						overflow="hidden"
					/>
				),
			},
		},
	];

	const today = dayjs();

	const birthday = dayjs("1996-10-11");

	const age = Math.floor(today.diff(birthday) / 31557600000);

	return (
		<Box width="100%" bg="background">
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

			<FadeOnScroll id="main" animation="fadeInTop">
				<HStack
					id="main"
					opacity={0}
					width="100%"
					m="max(60px, 6vw) auto auto auto"
					maxWidth="breakpoint-lg"
					justifyContent={
						{
							base: "space-between",
							contentWidthDown: "center",
						} as any
					}
					flexDirection={
						{
							contentWidthDown: "column-reverse",
						} as any
					}
					gap="1em"
					padding="1em"
				>
					<VStack alignItems="flex-start">
						<Heading as="h2" color="secondaryToWhite">
							Makanaokeakua Edwards, {age}
						</Heading>

						<Heading as="h4" color="text">
							Software Engineer
						</Heading>

						<Text color="text">
							Creating performant, scalable, and accessible web applications.
						</Text>

						<HStack alignItems="stretch">
							<CHLink
								bg="secondaryToPrimary"
								color="text"
								p="0.5em 1em"
								borderRadius="0.25em"
								transition="all 0.2s ease-in-out"
								_hover={{
									bg: "primaryToWhite",
									color: "whiteToSecondary",
								}}
								textDecoration="none"
								asChild
							>
								<Link href="">Explore</Link>
							</CHLink>

							<CHLink
								bg="whiteToPrimary"
								color="secondaryToWhite"
								p="0.5em 1em"
								borderRadius="0.25em"
								transition="all 0.2s ease-in-out"
								_hover={{
									bg: "secondaryToWhite",
									color: "whiteToSecondary",
								}}
								asChild
							>
								<Link href="">
									<FaGithub />
								</Link>
							</CHLink>

							<CHLink
								bg="whiteToPrimary"
								color="secondaryToWhite"
								p="0.5em 1em"
								borderRadius="0.25em"
								transition="all 0.2s ease-in-out"
								_hover={{
									bg: "secondaryToWhite",
									color: "whiteToSecondary",
								}}
								asChild
							>
								<Link href="">
									<FaLinkedin />
								</Link>
							</CHLink>
						</HStack>
					</VStack>

					<CHImage shadow="paper" asChild>
						<Image
							src={me.src}
							alt="Makanaokeakua Edwards"
							width={250}
							height={250}
							style={{
								borderRadius: "0.25em",
								objectFit: "cover",
								width: "200px",
								height: "200px",
							}}
							priority
						/>
					</CHImage>
				</HStack>
			</FadeOnScroll>

			<Splash>
				<FadeOnScroll id="skills" animation="fadeInZoom" type="children">
					<SimpleGrid
						id="skills"
						width="100%"
						maxWidth="breakpoint-lg"
						justifyItems="center"
						flexWrap="wrap"
						gap="1em"
						p="1em"
						gridTemplateColumns={{
							base: "1fr 1fr 1fr 1fr 1fr 1fr",
						}}
						color="secondaryToWhite"
					>
						<Icon
							fontSize="min(10vw, 5rem)"
							_hover={{
								transform: "scale(1.1)",
								transition: "transform 0.2s ease-in-out",
								cursor: "pointer",
							}}
							opacity={0}
							asChild
						>
							<RiReactjsFill />
						</Icon>

						<Icon
							fontSize="min(10vw, 5rem)"
							_hover={{
								transform: "scale(1.1)",
								transition: "transform 0.2s ease-in-out",
								cursor: "pointer",
							}}
							opacity={0}
							asChild
						>
							<RiNextjsFill />
						</Icon>

						<Icon
							fontSize="min(10vw, 5rem)"
							_hover={{
								transform: "scale(1.1)",
								transition: "transform 0.2s ease-in-out",
								cursor: "pointer",
							}}
							opacity={0}
							asChild
						>
							<RiNodejsFill />
						</Icon>

						<Icon
							fontSize="min(10vw, 5rem)"
							_hover={{
								transform: "scale(1.1)",
								transition: "transform 0.2s ease-in-out",
								cursor: "pointer",
							}}
							opacity={0}
							asChild
						>
							<RiWordpressFill />
						</Icon>

						<Icon
							fontSize="min(10vw, 5rem)"
							_hover={{
								transform: "scale(1.1)",
								transition: "transform 0.2s ease-in-out",
								cursor: "pointer",
							}}
							opacity={0}
							asChild
						>
							<SiChakraui />
						</Icon>

						<Icon
							fontSize="min(10vw, 5rem)"
							_hover={{
								transform: "scale(1.1)",
								transition: "transform 0.2s ease-in-out",
								cursor: "pointer",
							}}
							opacity={0}
							asChild
						>
							<SiApollographql />
						</Icon>
					</SimpleGrid>
				</FadeOnScroll>
			</Splash>

			<VStack width="100%" p="1em" gap="4em" maxWidth="breakpoint-lg" m="auto">
				<Heading as="h3" color="white" textAlign="center">
					Professional Work
				</Heading>

				{projects.map((project, i) => (
					<FadeOnScroll
						id={`project${i + 1}`}
						animation={(i + 1) % 2 == 0 ? "fadeInRight" : "fadeInLeft"}
						key={i}
					>
						<Stack
							opacity={0}
							id={`project${i + 1}`}
							flexDirection={
								{
									base: (i + 1) % 2 == 0 ? "row-reverse" : "row",
									contentWidthDown: "column-reverse",
								} as any
							}
							gap="1em 3em"
							alignItems="stretch"
							width="100%"
						>
							<VStack
								alignItems="flex-start"
								justifyContent="center"
								width={
									{
										base: "calc(50% - 1.5em)",
										contentWidthDown: "100%",
									} as any
								}
								flexGrow={1}
							>
								<Heading as="h4" color="whiteToPrimary">
									{project.title}
								</Heading>

								<Text color="secondaryToWhite">{project.text}</Text>

								{project.resource.url ? (
									<CHLink
										bg="secondaryToPrimary"
										color="white"
										p="0.5em 1em"
										textDecoration="none"
										mt="1em"
										asChild
									>
										<Link href={project.resource.url}>
											<span>Visit Site</span>
											<Icon asChild>
												<FaGlobe />
											</Icon>
										</Link>
									</CHLink>
								) : null}
							</VStack>

							<Box
								width={
									{
										base: "calc(50% - 1.5em)",
										contentWidthDown: "100%",
									} as any
								}
								borderRadius="0.25em"
								shadow="paper"
								flexGrow={1}
								aspectRatio={3 / 2}
								objectFit="cover"
								asChild
							>
								{project.resource.type == "component" ? (
									project.resource.value
								) : project.resource.type == "video" ? (
									<video
										src={project.resource.value as string}
										preload="metadata"
										autoPlay
										loop
										muted
									></video>
								) : (
									<Image
										src={project.resource.value as string}
										alt={`Project ${i + 1} Image`}
										width={200}
										height={150}
									/>
								)}
							</Box>
						</Stack>
					</FadeOnScroll>
				))}
			</VStack>

			<br />

			<br />

			<br />

			<br />

			<VStack width="100%" p="1em" gap="4em" maxWidth="breakpoint-lg" m="auto">
				<Heading as="h3" color="white" textAlign="center">
					Personal Projects
				</Heading>

				{personalProjects.map((project, i) => (
					<FadeOnScroll
						id={`personalProject${i + 1}`}
						animation={(i + 1) % 2 == 0 ? "fadeInRight" : "fadeInLeft"}
						key={i}
					>
						<Stack
							opacity={0}
							id={`personalProject${i + 1}`}
							flexDirection={
								{
									base: (i + 1) % 2 == 0 ? "row-reverse" : "row",
									contentWidthDown:
										(i + 1) % 2 == 0 ? "column" : "column-reverse",
								} as any
							}
							gap="1em 3em"
							alignItems="stretch"
							width="100%"
						>
							<VStack
								alignItems="flex-start"
								justifyContent="center"
								width={
									{
										base: "calc(50% - 1.5em)",
										contentWidthDown: "100%",
									} as any
								}
								flexGrow={1}
							>
								<Heading as="h4" color="whiteToPrimary">
									{project.title}
								</Heading>

								<Text color="secondaryToWhite">{project.text}</Text>
							</VStack>

							<Box
								width={
									{
										base: "calc(50% - 1.5em)",
										contentWidthDown: "100%",
									} as any
								}
								borderRadius="0.25em"
								shadow="paper"
								flexGrow={1}
								aspectRatio={3 / 2}
								objectFit="cover"
								asChild
							>
								{project.resource.type == "component" ? (
									project.resource.value
								) : project.resource.type == "video" ? (
									<video
										src={project.resource.value as string}
										preload="metadata"
										autoPlay
										loop
										muted
									></video>
								) : (
									<Image
										src={project.resource.value as string}
										alt={`Project ${i + 1} Image`}
										width={200}
										height={150}
									/>
								)}
							</Box>
						</Stack>
					</FadeOnScroll>
				))}
			</VStack>

			<Splash
				innerProps={{
					p: "1em",
					gap: "0em",
				}}
			>
				<FadeOnScroll id="about" animation="fadeInTop" threshold={0.2}>
					<VStack gap="4em" id="about" opacity={0}>
						<Box textAlign="center">
							<Heading as="h3" color="primaryToWhite">
								Who am I?
							</Heading>

							<Text color="secondaryToWhite">
								Well here are some gifs that describe me 😊
							</Text>
						</Box>

						<Gallery id="galler" />

						<Text color="primaryToWhite">Enough said.</Text>

						<Heading as="h3" color="secondaryToWhite">
							Cool, but what do people actually think? 😒
						</Heading>

						<VStack gap="2em" alignItems="stretch">
							<HStack
								flexWrap={{
									smDown: "wrap",
								}}
								shadow="paper"
								p={{
									base: "1em",
									smDown: "2em",
								}}
								gap="1em"
								bg="white"
								borderRadius="0.25em"
							>
								<CHImage
									p="0.25em"
									borderWidth="0.25em"
									borderStyle="solid"
									borderColor="primary"
									borderRadius="50%"
									aspectRatio={1}
									flexGrow={1}
									width="calc(25% -0.5em)"
									maxWidth={125}
									maxHeight={125}
									m="auto"
									asChild
								>
									<Image
										src={notMe.src}
										alt="Not Makanaokeakua Edwards"
										width={125}
										height={125}
										style={{
											objectFit: "cover",
										}}
										priority
									/>
								</CHImage>

								<VStack
									alignItems="flex-start"
									width="calc(75% - 0.5em)"
									flexGrow={1}
								>
									<Heading as="h4">
										Notme Mcgee -{" "}
										<Box as="span" color="primary">
											Software Engineer at GoogFace
										</Box>
									</Heading>

									<Box as="blockquote">
										"Mr Edwards is an amazing character. He saved us many hours
										of work. God bless him."
									</Box>
								</VStack>
							</HStack>

							<HStack
								flexWrap={{
									smDown: "wrap",
								}}
								shadow="paper"
								p={{
									base: "1em",
									smDown: "2em",
								}}
								gap="1em"
								bg="white"
								borderRadius="0.25em"
							>
								<CHImage
									p="0.25em"
									borderWidth="0.25em"
									borderStyle="solid"
									borderColor="primary"
									borderRadius="50%"
									aspectRatio={1}
									flexGrow={1}
									maxWidth={125}
									maxHeight={125}
									m="auto"
									width="calc(25% -0.5em)"
									asChild
								>
									<Image
										src={jeff.src}
										alt="Jeff Bezos"
										width={125}
										height={125}
										style={{
											objectFit: "cover",
										}}
										priority
									/>
								</CHImage>

								<VStack
									alignItems="flex-start"
									width="calc(75% - 0.5em)"
									flexGrow={1}
								>
									<Heading as="h4">
										Jeff Bezos -{" "}
										<Box as="span" color="primary">
											Amazon's dad
										</Box>
									</Heading>

									<Box as="blockquote">
										"Masterful use of stackoverflow. This guy's going places!"
									</Box>
								</VStack>
							</HStack>
						</VStack>
					</VStack>
				</FadeOnScroll>
			</Splash>

			<FadeOnScroll id="contact" animation="fadeInTop" threshold={0.5}>
				<VStack id="contact" opacity={0} width="100%" p="1em" gap="4em">
					<Heading as="h3" color="white">
						Get in touch
					</Heading>

					<ContactUs />
				</VStack>
			</FadeOnScroll>

			<Splash hideBottom>
				<VStack
					as="footer"
					p="2em"
					width="100%"
					gap="5em"
					color="secondaryToWhite"
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
								<Link href="">
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
			</Splash>
		</Box>
	);
}
