# Tailwind CSS Object Position Plugin

This plugin adds utilities to use object-position with Tailwind CSS.

## Installation

Add this plugin to your project:

```bash
# Install using npm
npm install --save-dev tailwindcss-object-position

# Install using yarn
yarn add -D tailwindcss-object-position
```

## Usage

```js
require('tailwindcss-object-position')(['responsive'])
```

```css
.object-top: { object-position: top; }
.object-right: { object-position: right; }
.object-bottom: { object-position: bottom; }
.object-left: { object-position: left; }
.object-center: { object-position: center; }
.object-right-top: { object-position: right top; }
.object-right-bottom: { object-position: right bottom; }
.object-left-top: { object-position: left top; }
.object-left-bottom: { object-position: left bottom; }
```
