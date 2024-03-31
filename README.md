# Rating Component

This is a reusable rating component built with React and Chakra UI. It allows users to display ratings using stars.

## Installation

To use this component in your React project, follow these steps:

1. Install the necessary dependencies:

```bash
   npm install @chakra-ui/react @emotion/react @emotion/styled react-icons
```
Copy the RatingField.js file into your project.

Import the RatingField component into your project and use it as needed.

## Usage

```javascript
import React from "react";
import { RatingField } from "./RatingField";

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <RatingField currentRating={4.5} color="yellow.400" />
    </div>
  );
}

export default MyComponent;
```
## Props
currentRating: The current rating to display.
color: The color of the stars.