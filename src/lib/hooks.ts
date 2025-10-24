"use client";

import { useEffect } from "react";

export function useScrollTo({
	offset = 120,
	id,
	maxRetries = 3,
	needsTrigger = false,
}: {
	offset?: number;
	id?: string;
	maxRetries?: number;
	needsTrigger?: boolean;
}): [scrollToElement: (retries?: number, hash?: string) => void] {
	const scrollToElement = (retries = 0, hash = "") => {
		const el = document.querySelector(id ? `#${id}` : hash);

		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({
				top,
				behavior: "smooth",
			});
		} else if (retries < maxRetries) {
			// Retry in case it's not in DOM yet
			setTimeout(() => scrollToElement(retries + 1), 100);
		}
	};

	useEffect(() => {
		if (typeof window === "undefined" || needsTrigger) return;

		const hash = window.location.hash;
		if (!id && !hash) return;

		// Delay to ensure render + hydration
		const timeout = setTimeout(() => scrollToElement(0, hash), 100);

		return () => {
			clearTimeout(timeout);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, offset, maxRetries, needsTrigger]);

	return [scrollToElement];
}
