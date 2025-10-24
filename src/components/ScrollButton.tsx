"use client";
import { useScrollTo } from "../lib/hooks";
import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ScrollButton({
	id,
	children,
	onCallback,
	...props
}: {
	id: string;
	children: ReactNode;
	onCallback?: () => void;
} & ButtonProps) {
	const [trigger] = useScrollTo({ id, needsTrigger: true });

	return (
		<Button
			onClick={() => {
				trigger();
				if (onCallback) {
					onCallback();
				}
			}}
			{...props}
			style={{
				background: "none",
				color: "inherit",
				padding: 0,
				fontWeight: "normal",
				minHeight: "none",
				height: "max-content",
				fontSize: "inherit",
				...(props.style ?? {}),
			}}
		>
			{children}
		</Button>
	);
}
