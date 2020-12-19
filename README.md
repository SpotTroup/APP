```
/*     ___   _____      ___    _________  _________   ______      ___     _    _   ____
 *    / __| | ___  \   /   \   |__    __| |__    __| |  __   \   / _ \   | |  | | |  _  \
 *   / /    | |__| |  / _   \     |  |       |  |    | |__|  |  / / \ \  | |  | | | |_|  |
 *   \ \    |  ___ / |  | |  |    |  |       |  |    |    __/  | |   | | | |  | | |  ___/
 *    \ \   | |      |  | |  |    |  |       |  |    | |\ \    | |   | | | |  | | | |
 *     \ \  | |      |  |_|  |    |  |       |  |    | | \ \   | |   | | | |  | | | |
 *   __/ /  | |       \     /     |  |       |  |    | |  \ \   \ \_/  /  \ \_/ / | |
 *  |___/   |_|        \___/      |__|       |__|    |_|   \_\   \___/     \___/  |_|
 *  ---------------------------------------------------------------------------------------
 *      Parkingspace sharing for everyone -- CO² reduction -- eastsee cleaning 
 * ----------------------------------------------------------------------------------------
 */
```


## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).


# Style Guideline:

## individual CSS:

Tags in /src/style/tag_index.css

Classes /src/components/< Folder >/class_index.css  like main bootstrap infos

IDs in the /src/routes/< Folder >/ id_foldername.css

## bootstrap:

Javascript code in /src/stlye/js/*

css code in /src/style/css/*

**Important:** Primarly use the bootstrap framework

https://getbootstrap.com/docs/5.0/getting-started/introduction/

# HTML with Preact (htm)

This description for html is very similar.

"[HTM](https://github.com/developit/htm) is a JSX-like syntax that works in standard JavaScript. Instead of requiring a build step, it uses JavaScript's own [Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) syntax, which was added in 2015 and is supported in [all modern browsers](https://caniuse.com/#feat=template-literals). This is an increasingly popular way to write Preact apps, since there are fewer moving parts to understand than a traditional front-end build tooling setup." - from https://preactjs.com/guide/v10/getting-started

More Informations: https://github.com/developit/htm



# Preact Code:

h(): ""The `h()` function is used to turn JSX into a structure Preact understands.But it can also be used directly without any JSX involved"" - homepage preact

render()

# Bibliothec & Add-ons:

[LINK] https://preactjs.com/about/libraries-addons/

# Dev-Dependencies:":

### "enzyme":"^3.11.0":


[Summary]: Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

[LINK] https://www.npmjs.com/package/enzyme

### "enzyme-adapter-preact-pure": "^2.2.3",

This is an adapter to support using the [Enzyme](https://airbnb.io/enzyme/) UI component testing library with [Preact](https://preactjs.com/). For documentation, please see [the testing guide on the PreactJS website](https://preactjs.com/guide/v10/unit-testing-with-enzyme).

[LINK] https://www.npmjs.com/package/enzyme-adapter-preact-pure

### "eslint": "^7.16.0",

[Summary] ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

[LINK] https://www.npmjs.com/package/eslint


### "eslint-config-preact": "^1.1.3",


[Summary] An unopinionated baseline ESLint configuration for Preact and Preact CLI codebases.

[LINK] https://www.npmjs.com/package/eslint-config-preact

### "jest": "^26.6.3",


[Summary] Delightful JavaScript Testing

[LINK] https://www.npmjs.com/package/jest

### "jest-preset-preact": "^4.0.2",


[Summary] Jest preset containing all required configuration for writing tests for [preact](https://github.com/preactjs/preact).

[LINK] https://www.npmjs.com/package/jest-preset-preact

### "preact-cli": "^3.0.5",


[Summary] Start building a Preact Progressive Web App in seconds.

[LINK] https://www.npmjs.com/search?q=preact-cli

### "preact-material-components": "^1.6.1",


[Summary] preact components for [material-components-web](https://material.io/develop/web)

[LINK] https://www.npmjs.com/package/preact-material-components

### "sirv-cli": "1.0.10"


[Summary] Quickly start a server to preview the assets of *any* directory!

[LINK] https://www.npmjs.com/package/sirv-cli


# Dependencies:

### "axios": "^0.21.0",


[Summary] Promise based HTTP client for the browser and node.js

[LINK] https://www.npmjs.com/package/axios

### "bootstrap": "^4.5.3",


[Summary] The most popular front-end framework for developing responsive, mobile first projects on the web.

[LINK] https://www.npmjs.com/package/bootstrap

### "google-maps-react": "^2.0.6",


[Summary]

[LINK]

### "preact": "^10.5.7",


[Summary] **All the power of Virtual DOM components, without the overhea**

[LINK] https://www.npmjs.com/package/preact

### "preact-fluid": "^0.9.1", - 2 years old


[Summary] Minimal **UI Kit** for Preact, with reusable components.

[LINK] https://npmjs.com/package/preact-fluid

### "preact-render-to-string": "^5.1.12",


[Summary] Render JSX and [Preact](https://github.com/developit/preact) components to an HTML string.

[LINK] https://www.npmjs.com/package/preact-render-to-string

### "preact-router": "^3.2.1",


[Summary] Connect your [Preact](https://github.com/developit/preact) components up to that address bar.

[LINK] https://www.npmjs.com/package/preact-router

### "react-geocode": "^0.2.2",


[Summary] A module to transform a description of a location (i.e. street address, town name, etc.) into geographic coordinates (i.e. latitude and longitude) and vice versa. Not based on react

[LINK] https://www.npmjs.com/package/react-geocode

### "react-rating": "^2.0.5",  deprecated by bootstrap 


[Summary] React Rating is a [react](https://github.com/facebook/react) rating component which supports custom symbols both with [inline styles](https://facebook.github.io/react/tips/inline-styles.html) and glyphicons found in popular CSS Toolkits like [Fontawesome](http://fortawesome.github.io/Font-Awesome/icons/) or [Bootstrap](http://getbootstrap.com/components/).

[LINK] https://www.npmjs.com/package/react-rating

### "tiled-hexagons": "^1.0.2",


[Summary] `tiled-hexagons` is a simple React button component set to help you render one or more multiple tessellated hexagon buttons

[LINK] https://www.npmjs.com/package/tiled-hexagons

### "redux zero" :


[Summary] A lightweight state container based on Redux

[LINK] https://www.npmjs.com/package/redux-zero


### "bit.dev " :


[Summary]

[LINK]

[Bit](https://bit.dev/) ([Github](https://github.com/teambit/bit)) lets you easily “harvest” components from any codebase and share them to a collection (a sort-of modular library) in [bit.dev](https://bit.dev/). -> https://bit.dev/
