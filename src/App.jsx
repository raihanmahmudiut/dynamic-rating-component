import React, { useState } from "react";
import {
	ChakraProvider,
	Input,
	Box,
	FormControl,
	FormLabel,
	Container,
	Text,
	HStack,
	extendTheme,
} from "@chakra-ui/react";
import RatingField from "./rating";

// Extend the default Chakra UI theme to customize body background color
const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "black",
			},
		},
	},
});

function App() {
	const [currentRating, setCurrentRating] = useState(0);
	const [inputRating, setInputRating] = useState(""); // State for input rating

	const handleRatingChange = (event) => {
		setInputRating(event.target.value); // Update input rating
		setCurrentRating(parseFloat(event.target.value)); // Update current rating
	};

	return (
		<ChakraProvider theme={theme}>
			<Container
				width="100%"
				height="100vh"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Box width="400px">
					<HStack>
						<Text textColor={"white"} fontSize={"1.5rem"}>
							Ratings
						</Text>
						<RatingField currentRating={currentRating} color="yellow.400" />
					</HStack>
					<FormControl mt={4}>
						<FormLabel textColor={"white"} fontSize={"2rem"}>
							Enter current rating
						</FormLabel>
						<Input
							type="number"
							textColor={"white"}
							placeholder="Enter current rating"
							value={inputRating}
							onChange={handleRatingChange}
						/>
					</FormControl>
				</Box>
			</Container>
		</ChakraProvider>
	);
}

export default App;
