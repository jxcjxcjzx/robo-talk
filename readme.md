# robot-talk [![Build Status](https://travis-ci.org/radiovisual/robot-talk.svg?branch=master)](https://travis-ci.org/radiovisual/robot-talk)

> My tiptop module


## Install

```
$ npm install --save robot-talk
```


## Usage

```js
const botSpeak = require('robot-talk');

botSpeak.encode('unicorns & rainbows');
//=> 'Beeep Beeep Beeeeep. Beeep Beeep Bip. Beeep Bip Booop. Bopp Bopp. Beeep Beeep Beeep. Beeep Beeep Boop. Beeep Beeep Bip. Beeep Beeep Booop. Beeeep Bop. Beeeep Boooop. Beeeep Bop. Beeep Beeep Boop. Bopp Beeeeep. Beeep Bip Booop. Beeep Beeep Bip. Bopp Boooop. Beeep Beeep Beeep. Beeep Beeep Bopp. Beeep Beeep Booop'

botSpeak.decode('Beeep Beeep Beeeeep. Beeep Beeep Bip. Beeep Bip Booop. Bopp Bopp. Beeep Beeep Beeep. Beeep Beeep Boop. Beeep Beeep Bip. Beeep Beeep Booop. Beeeep Bop. Beeeep Boooop. Beeeep Bop. Beeep Beeep Boop. Bopp Beeeeep. Beeep Bip Booop. Beeep Beeep Bip. Bopp Boooop. Beeep Beeep Beeep. Beeep Beeep Bopp. Beeep Beeep Booop');
//=> unicorns & rainbows
```

## Special Character Support

botSpeak can encode and decode special characters, so have some fun with your messages!

```js
botSpeak.encode('🍕 + 🍺');
//=> 'Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Beeeeep Beeeep. Beeeep Bop. Boop Beeeep. Beeeep Bop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Bop Beeep Bip'
```

## API

### robotTalk(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
