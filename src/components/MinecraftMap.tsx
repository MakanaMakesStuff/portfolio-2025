"use client";

import { useEffect, useRef, useState } from "react";
import minecraft from "../../public/assets/images/minecraft/bg.png";
import grassImg from "../../public/assets/images/minecraft/grass.png";
import redImg from "../../public/assets/images/minecraft/red.png";
import whiteImg from "../../public/assets/images/minecraft/white.png";
import { Box, BoxProps } from "@chakra-ui/react";

interface Coords {
	x: number;
	y: number;
}

type BlockStatus = "red" | "white" | "grass";

const snapx = 75;
const snapy = 80;

const initialBlocks: Coords[] = [
	{ y: 320, x: 600 },
	{ x: 0, y: 320 },
	{ x: 150, y: 320 },
	{ x: 225, y: 320 },
	{ x: 300, y: 320 },
	{ x: 375, y: 320 },
	{ x: 525, y: 320 },
	{ x: 225, y: 80 },
	{ x: 300, y: 80 },
];

export default function MinecraftMap({ ...props }: BoxProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });
	const [blocks, setBlocks] = useState<Coords[]>(initialBlocks);

	const textures = useRef<Record<BlockStatus, HTMLImageElement>>(null);

	// Load textures once

	const drawBlock = (coords: Coords, status: BlockStatus = "grass") => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!ctx) return;

		ctx.shadowColor = "rgba(0,0,0,1)";
		ctx.shadowBlur = 15;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;

		const block = textures.current?.[status];

		if (block) ctx.drawImage(block, coords.x, coords.y, snapx, snapy);
	};

	const drawBackground = () => {
		const canvas = canvasRef.current;
		const image = imageRef.current;
		if (!canvas || !image) return;

		canvas.width = image.naturalWidth;
		canvas.height = image.naturalHeight;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 0, 0);
		blocks.forEach((block) => drawBlock(block, "grass"));
	};

	const renderBlock = ({ x, y }: Coords) => {
		x = Math.floor(x / snapx) * snapx;
		y = Math.floor(y / snapy) * snapy;

		drawBackground();

		if (blocks.some((block) => block.x === x && block.y === y)) {
			drawBlock({ x, y }, "red");
		} else {
			drawBlock({ x, y }, "white");
		}
	};

	const addBlock = ({ x, y }: Coords) => {
		x = Math.floor(x / snapx) * snapx;
		y = Math.floor(y / snapy) * snapy;

		setBlocks((prevBlocks) => {
			const exists = prevBlocks.some((block) => block.x === x && block.y === y);
			const newBlocks = exists
				? prevBlocks.filter((block) => block.x !== x || block.y !== y)
				: [...prevBlocks, { x, y }];
			return newBlocks;
		});
	};

	const getMousePos = (evt: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const rect = canvas.getBoundingClientRect();
		const scaleX = canvas.width / rect.width;
		const scaleY = canvas.height / rect.height;

		const x = (evt.clientX - rect.left) * scaleX;
		const y = (evt.clientY - rect.top) * scaleY;

		const newCoords = { x, y };
		setCoords(newCoords);
		renderBlock(newCoords);
	};

	useEffect(() => {
		if (!textures.current) {
			const grass = new Image();
			const red = new Image();
			const white = new Image();

			grass.src = grassImg.src;
			red.src = redImg.src;
			white.src = whiteImg.src;

			textures.current = {
				grass,
				red,
				white,
			};

			let loaded = 0;

			grass.onload = () => (loaded += 1);
			red.onload = () => (loaded += 1);
			white.onload = () => {
				loaded += 1;

				if (loaded >= 3) {
					drawBackground();
				}
			};
		} else {
			drawBackground();
		}
	}, [blocks]);

	return (
		<Box width="100%" maxWidth="800px" {...props}>
			<canvas
				ref={canvasRef}
				style={{ width: "100%", backgroundColor: "white" }}
				onMouseMove={getMousePos}
				onClick={() => addBlock(coords)}
			/>
			<img
				ref={imageRef}
				src={minecraft.src}
				alt="Minecraft"
				style={{ display: "none" }}
			/>
		</Box>
	);
}
