class Mosaic {
	resizable: boolean;
	obj: HTMLElement | null;

	constructor(obj: string | HTMLElement, resizable: boolean = false) {
		this.resizable = resizable;
		if (typeof obj === "string") this.obj = document.querySelector(obj);
		else this.obj = obj;

		if (this.obj) {
			window.addEventListener("load", () => {
				this.Sort(3, 4);
			});
		}
	}

	Sort(col: number, pad: number, rounded: number = 0) {
		if (!this.obj) return console.error("No object found");

		const nodes = this.obj.getElementsByTagName("img");
		if (!nodes) return;
		const images = Array.from(nodes);

		if (col > images.length / 2 || col <= 0)
			return console.error("col must not exceed half of images in gallery");

		const allLoaded = images.map((img) => {
			return new Promise<void>((resolve) => {
				if (img.complete) resolve();
				else img.onload = () => resolve();
			});
		});

		const diff = images.length % col;
		const rowCount = (images.length - diff) / col;
		this.obj.style.fontSize = "0";
		const galleryWidth = this.obj.getBoundingClientRect().width;
		if (!galleryWidth) return;

		Promise.all(allLoaded).then(() => {
			for (const img of images) {
				Object.assign(img.style, {
					boxSizing: "border-box",
					position: "relative",
					height: galleryWidth / col + "px",
					width: "auto",
					display: "inline-block",
					margin: "0",
					fontSize: "0",
					padding: pad + "px",
				});
			}

			for (let i = 0; i < rowCount; i++) {
				const row = images.slice(i * col, (i + 1) * col);
				const totalWidth = row.reduce(
					(sum, img) => sum + img.getBoundingClientRect().width,
					0
				);

				for (const img of row) {
					const perc = img.getBoundingClientRect().width / totalWidth;
					Object.assign(img.style, {
						width: perc * 100 + "%",
						height: "auto",
						borderRadius: rounded + "px",
					});
				}
			}

			if (diff > 0) {
				const lastRow = images.slice(-diff);
				const leftoverWidth = galleryWidth - pad * 2 * diff;
				const lastColWidth = leftoverWidth / diff;

				lastRow.forEach((img) => {
					img.style.width = lastColWidth + "px";
					img.style.height = "auto";
				});
			}
		});
	}
}

export function getMosaic(
	obj: string | HTMLElement,
	resizable: boolean = false
) {
	return new Mosaic(obj, resizable);
}
