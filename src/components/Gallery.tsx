"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import CHImage from "next/image";
import a from "../../public/assets/images/who am i/001.gif";
import b from "../../public/assets/images/who am i/002.gif";
import c from "../../public/assets/images/who am i/003.gif";
import d from "../../public/assets/images/who am i/004.gif";
import e from "../../public/assets/images/who am i/005.gif";
import f from "../../public/assets/images/who am i/006.gif";
import { useCallback } from "react";
import { getMosaic } from "@/src/lib/msort";

export default function Gallery({ ...props }: BoxProps) {
	const gallery = useCallback((e: HTMLDivElement) => {
		if (!e) return;

		const mosaic = getMosaic(e, true);

		mosaic.Sort(3, 4);

		window.addEventListener("resize", () => {
			if (window.innerWidth < 800) {
				mosaic.Sort(2, 4);
			} else {
				mosaic.Sort(3, 4);
			}
		});
	}, []);

	return (
		<Box
			width="100%"
			alignItems="stretch"
			maxWidth="breakpoint-lg"
			ref={gallery}
			{...props}
		>
			<CHImage src={a.src} width={200} height={150} alt="Who am I? - 001" />

			<CHImage src={b.src} width={200} height={150} alt="Who am I? - 002" />

			<CHImage src={c.src} width={200} height={150} alt="Who am I? - 003" />

			<CHImage src={d.src} width={200} height={150} alt="Who am I? - 004" />

			<CHImage src={e.src} width={200} height={150} alt="Who am I? - 005" />

			<CHImage src={f.src} width={200} height={150} alt="Who am I? - 006" />
		</Box>
	);
}
