/*
#####################################################################################
#####################################################################################
##                                                                                 ##
## Author: Makana O' Ke Akua Edwards                                               ##
##                                                                                 ##
## Date: 10/24/2021                                                              ##
##                                                                                 ##
## Time: 9:01 pm EST                                                              ##
##                                                                                 ##
## Description: A plugin for creating the Mosaic layout for image galleries        ##
##                                                                                 ##
#####################################################################################
#####################################################################################
*/
class Mosaic {
	resizable: boolean;
	obj: HTMLElement | null;

	constructor(obj: string | HTMLElement, resizable: boolean = false) {
		this.resizable = resizable;
		if (typeof obj === "string") this.obj = document.querySelector(obj);
		else this.obj = obj;
	}

	Sort(col: number, pad: number, rounded: number = 0) {
		//col represents the amount of columns in the gallery
		//pad represents the amount of space between each image

		if (!this.obj) return console.error("No object found");

		const nodes = this.obj.getElementsByTagName("img");
		if (!nodes) return;
		const images = Array.from(nodes);

		//return if col is greater than half the img items
		if (col > images.length / 2 || col <= 0)
			return console.error("col must not exceed half of images in gallery");

		//Get the difference to check for odd number of images
		const diff = images.length % col;

		//set the counter which will represent each row of our gallery
		const cout = (images.length - diff) / col;
		this.obj.style.fontSize = "0";

		//if there is a differenc(Odd number of images) then scale the last image appropriately

		if (diff >= 0) {
			/* Get the offsetWidth of the gallery which Holds 
            our images, these values will be used to scale our images initially 
            and dynamically on window resizing */

			const galleryWidth = this.obj.getBoundingClientRect().width;

			if (!galleryWidth) return;

			//Set the height each image dynamically
			for (const image in images) {
				//create a styles object to change our image styling
				const styles = {
					boxSizing: "border-box",
					position: "relative",
					height: galleryWidth / col + "px",
					width: "auto",
					display: "inline-block",
					float: "auto",
					margin: "0",
					fontSize: "0px",
					padding: pad + "px",
				};
				//Assign the styles object to our image style properties
				Object.assign(images[image].style, styles);
			}

			//this.obj.style.backgroundColor = "red";
			//Get row and reset total width
			for (let i = 0; i < cout; i++) {
				const row = images.slice(i * col, (i + 1) * col);
				let totalWidth = 0;

				for (const r in row) {
					totalWidth += row[r].getBoundingClientRect().width;
				}

				for (const r in row) {
					const perc = row[r].getBoundingClientRect().width / totalWidth;
					const styles = {
						width: perc * 100 + "%",
						height: "auto",
						borderRadius: rounded + "px",
					};

					Object.assign(row[r].style, styles);
				}
			}

			if (diff > 0) {
				images[images.length - 1].style.width = "100%";
				images[images.length - 1].style.height = "auto";
			}
		}
	}
}

export function getMosaic(
	obj: string | HTMLElement,
	resizable: boolean = false
) {
	return new Mosaic(obj, resizable);
}
