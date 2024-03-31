import React from "react";
import { HStack, Icon } from "@chakra-ui/react";

const RatingField = ({ currentRating, color, icon }) => {
  const fullStars = Math.floor(currentRating); // Number of full stars
  const remainingRating = currentRating - fullStars; // Decimal part of the rating

  const renderIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(<Icon key={i} as={icon} color={color} boxSize={5} />);
    }
    return icons;
  };

  return (
    <HStack spacing={1} borderColor={"white"}>
      {renderIcons(fullStars)}
      {remainingRating > 0 && remainingRating < 1 && (
        <Icon
          as={icon}
          color={color}
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
