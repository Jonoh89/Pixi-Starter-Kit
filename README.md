# Pixi Starter Kit

A starter kit for using PixiV3 in ES6

## Technology

### Pixi

Pixi is a 2D webGL renderer with canvas fallback, version 3 is the latest version bringing CommonJS style modules 
with looooads of improvements, see [here](http://www.goodboydigital.com/pixi-js-v3/). Coming from Phaser I found it a 
little difficult to get started, expecting some things (like loading a sprite without JSON) to 'just work', they did not,
so this is what I came up with. The goal of this project is to give a lightweight start and structure to creating a 
game in Pixi. 

### ES6

The project JavaScript is all compiled into the public folder using Browserify and Babel. I love writing in ES6 and 
think the new class extends syntax works great with Pixi for readability when extending the Pixi objects. My favourite 
two resources for getting started with using ES6 are [Babel's own site](https://babeljs.io/docs/learn-es2015/) and 
[a guide for replacing underscore methods with ES6](https://www.reindex.io/blog/you-might-not-need-underscore/).

### Texture Packer

I am using Texture Packer to sprite up my assets. This is a good practice to be in to help keep file size down as your 
assets grow. This tool is not free after the trial, I use it at work so if anyone has a free alternative that would
be great! 

## Installation

Get all the dependencies with:

```bash
$ npm install
```

I have not shipped with a server so use what you want, I am using the basic 
[http-server](https://github.com/indexzero/http-server). To use this just run:

```bash
$ npm install http-server -g
$ http-server
```

## Running the app

```bash
$ npm start
```

or 

```bash
$ gulp start
```

This will bundle all your ES6 JavaScript in the game/js folder into bundle.js in your public folder.

You can also help with code quality and readability by running:

```bash
$ gulp lint
```

To add a new image to the UI sprite sheet open ui.tps with [Texture Packer](https://www.codeandweb.com/texturepacker)
drag your new image in, save and publish and it should save it straight into the public folder.
Before going live I would recommend running these assets through [TinyPNG](https://tinypng.com/) to reduce the file 
size even more.

## Features

 - Splash Screen
 - Loader with % (pop on the throttle with chrome dev tools to see it)
 - Menu 
 - Game with animated sprite
 - Pause/Resume rendering
 - Sounds using [Howler](https://github.com/goldfire/howler.js/)
 - ES6 with linting/jscs for readability 
 - Texture packer spiriting of UI
 
## Contributing

I hope to add to this as I learn Pixi myself and start to use it in my projects. Happy to discuss adding anything 
(some nicer images would be nice!).

If you do wish to contribute please ensure you have ran gulp lint first.

## License

MIT

## Thanks

[This is the tutorial I based the scene structure on.](http://ezelia.com/2013/pixi-tutorial)
