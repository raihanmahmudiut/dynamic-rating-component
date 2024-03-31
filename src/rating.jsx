import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const RatingField = ({ currentRating, color }) => {
	const fullStars = Math.floor(currentRating); // Number of full stars
	const remainingRating = currentRating - fullStars; // Decimal part of the rating

	const renderStars = (count) => {
		const stars = [];
		for (let i = 0; i < count; i++) {
			stars.push(<Icon key={i} as={FaStar} color={color} boxSize={5} />);
		}
		return stars;
	};

	return (
		<HStack spacing={1}>
			{renderStars(fullStars)}
			{remainingRating > 0 && remainingRating < 1 && (
				<Icon
					as={FaStar}
					color={color}
					boxSize={5}
					style={{
						clipPath: `polygon(0 0, ${remainingRating * 100}% 0, ${
							remainingRating * 100
						}% 100%, 0 100%)`,
					}}
				/>
			)}
		</HStack>
	);
};

export default RatingField;
