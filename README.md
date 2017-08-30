## Example Symfony project with webpack 3 builder for CSS and JS

webpack-dev-server and browser-sync are use for reload browser on change event for all files in project (js, scss, php or yaml)


### Example use:
* webpack 3 [https://webpack.js.org/](https://webpack.js.org/)
* postcss [http://postcss.org/](http://postcss.org/)
* babel [https://babeljs.io/](https://babeljs.io/) with env preset [https://github.com/babel/babel-preset-env](https://github.com/babel/babel-preset-env)
* browsersync [https://www.browsersync.io/](https://www.browsersync.io/)
* editorconfig [http://editorconfig.org/](http://editorconfig.org/)
* esLint [https://eslint.org/](https://eslint.org/) with airbnb config [https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* prettier [https://github.com/prettier/prettier](https://github.com/prettier/prettier)
* styleLint [https://github.com/stylelint/stylelint](https://github.com/stylelint/stylelint) with stylelint-config-standard [https://github.com/stylelint/stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and stylelint-order plugin [https://github.com/hudochenkov/stylelint-order](https://github.com/hudochenkov/stylelint-order)

### Webpack

All configs files are in webpack-builder directory.

### Assets

Js and Css (sass) sources files are in assets directory

### Build

The files after build process are in web/build directory

### cmd

For init project (npm)

    $ npm i

For dev

    $ npm run dev

For build

    $ npm run build
