"use client";

import {
	Button,
	Heading,
	Icon,
	Input,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiPaperPlane } from "react-icons/gi";

export default function ContactUs() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<VStack
			gap="1em"
			bg="white"
			p="2em"
			borderRadius="0.25em"
			shadow="paper"
			width="100%"
			maxWidth="400px"
			alignItems="flex-start"
			color="secondary"
			asChild
		>
			<form
				action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd09C_4PLdH5tInHW0MfMxA1j8cCYsBpSQ5DNljYPxYfmAdZQ/formResponse?"
				method="POST"
				onSubmit={() => setSubmitted(true)}
				target="hidden_iframe"
			>
				<Heading
					as="h3"
					overflow="hidden"
					width="100%"
					height={submitted ? "2rem" : 0}
					opacity={submitted ? 1 : 0}
					transition="all 0.25s ease"
					textAlign="center"
					color="primary"
				>
					Email sent Successfully
				</Heading>

				<Input
					borderRadius="0.25em"
					border="none"
					borderBottomWidth="3px"
					borderBottomStyle="solid"
					borderBottomColor="primary"
					shadow="paper"
					p="0.5em"
					type="text"
					name="entry.504636968"
					id="entry.504636968"
					placeholder="Your name"
				/>

				<Input
					borderRadius="0.25em"
					border="none"
					borderBottomWidth="3px"
					borderBottomStyle="solid"
					borderBottomColor="primary"
					shadow="paper"
					p="0.5em"
					type="email"
					name="entry.776231149"
					id="entry.776231149"
					placeholder="abc@gmail.com"
					required
				/>

				<Input
					borderRadius="0.25em"
					border="none"
					borderBottomWidth="3px"
					borderBottomStyle="solid"
					borderBottomColor="primary"
					shadow="paper"
					p="0.5em"
					type="text"
					name="entry.1661813233"
					id="entry.1661813233"
					placeholder="Subject"
					required
				/>

				<Textarea
					borderRadius="0.25em"
					border="none"
					borderBottomWidth="3px"
					borderBottomStyle="solid"
					borderBottomColor="primary"
					shadow="paper"
					p="0.5em"
					name="entry.1974294052"
					id="entry.1974294052"
					cols={30}
					rows={5}
					placeholder="Type your message"
					required
				></Textarea>

				<Button
					type="submit"
					p="0.5em 1em"
					justifyContent="space-between"
					bg="unset"
					color="primary"
					borderRadius="2em"
					borderWidth="2px"
					borderColor="primary"
					borderStyle="solid"
					_hover={{
						bg: "secondary",
						color: "white",
					}}
					disabled={submitted}
					_disabled={{
						opacity: 0.5,
					}}
					alignSelf="flex-end"
				>
					<Icon asChild>
						<GiPaperPlane />
					</Icon>
					Send
				</Button>

				<iframe
					name="hidden_iframe"
					id="hidden_iframe"
					style={{
						display: "none",
					}}
				/>
			</form>
		</VStack>
	);
}
