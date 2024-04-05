# color-harmonies

[![npm version](https://badge.fury.io/js/colorharmonies.svg)](https://badge.fury.io/js/colorharmonies)

The `color-harmonies` package provides a JavaScript function to generate color harmonies based on a given color. It calculates complementary, analogous, and triadic colors to create visually pleasing color combinations. This package is useful for web developers, designers, and anyone working with color schemes in their projects.

## Features

- Calculate complementary, analogous, and triadic colors
- Input color in hexadecimal format
- Output colors in hexadecimal format
- Lightweight and easy to integrate into JavaScript projects

## Installation

You can install the package using npm:

npm install color-harmonies

## Usage

```javascript
const { getColorHarmonies } = require("color-harmonies");

const harmonies = getColorHarmonies("#FF5733");
console.log(harmonies);
```

This will output an object containing the original color and its complementary, analogous, and triadic colors.
