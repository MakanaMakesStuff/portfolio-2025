"use client";

import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
	defineSemanticTokens,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { ThemeProviderProps } from "next-themes";

export const semanticTokens = defineSemanticTokens({
	colors: {
		primary: {
			value: "#8458b3",
		},
		secondary: {
			value: "#282828",
		},
		text: {
			value: "white",
		},
		primaryToWhite: {
			value: {
				_light: "#8458b3",
				_dark: "white",
			},
		},
		whiteToPrimary: {
			value: {
				_light: "white",
				_dark: "#8458b3",
			},
		},
		secondaryToPrimary: {
			value: {
				_light: "#282828",
				_dark: "#8458b3",
			},
		},
		primaryToSecondary: {
			value: {
				_light: "#8458b3",
				_dark: "#282828",
			},
		},
		secondaryToWhite: {
			value: {
				_light: "#282828",
				_dark: "white",
			},
		},
		whiteToSecondary: {
			value: {
				base: "white",
				_light: "white",
				_dark: "#282828",
			},
		},
		background: {
			value: {
				_light: "#8458b3",
				_dark: "#282828",
			},
		},
	},
	shadows: {
		paper: {
			value: "0px 0px 8px 4px rgba(0, 0, 0, 0.1)",
		},
	},
});

const customConfig = defineConfig({
	theme: {
		semanticTokens,
		breakpoints: {
			contentWidth: "600px",
		},
	},
	globalCss: {
		"html, body": {
			fontSize: "16px !important",
		},
		h1: {
			fontSize: "clamp(2rem, 4vw, 3rem) !important",
		},
		h2: {
			fontSize: "clamp(1.75rem, 3vw, 2.5rem) !important",
		},
		h3: {
			fontSize: "clamp(1.5rem, 2.5vw, 2rem) !important",
		},
		h4: {
			fontSize: "clamp(1.25rem, 2vw, 1.5rem) !important",
		},
		h5: {
			fontSize: "clamp(1.125rem, 1.5vw, 1.25rem) !important",
		},
		h6: {
			fontSize: "clamp(1rem, 1.25vw, 1.125rem) !important",
		},
		"h1,h2,h3,h4,h5,h6": {
			fontFamily: "var(--font-share-tech) !important",
		},
	},
});

const system = createSystem(defaultConfig, customConfig);

export function Provider(props: ThemeProviderProps) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
