# robo-talk [![Build Status](https://travis-ci.org/radiovisual/robo-talk.svg?branch=master)](https://travis-ci.org/radiovisual/robo-talk)

> Encode / decode your human messages into something any robot would understand.


## Install

```
$ npm install --save robo-talk
```


## Usage

```js
const robotalk = require('robot-talk');

robotalk.encode('unicorns & rainbows');
//=> 'Beeep Beeep Beeeeep. Beeep Beeep Bip. Beeep Bip Booop. Bopp Bopp. Beeep Beeep Beeep. Beeep Beeep Boop. Beeep Beeep Bip. Beeep Beeep Booop. Beeeep Bop. Beeeep Boooop. Beeeep Bop. Beeep Beeep Boop. Bopp Beeeeep. Beeep Bip Booop. Beeep Beeep Bip. Bopp Boooop. Beeep Beeep Beeep. Beeep Beeep Bopp. Beeep Beeep Booop'

robotalk.decode('Beeep Beeep Beeeeep. Beeep Beeep Bip. Beeep Bip Booop. Bopp Bopp. Beeep Beeep Beeep. Beeep Beeep Boop. Beeep Beeep Bip. Beeep Beeep Booop. Beeeep Bop. Beeeep Boooop. Beeeep Bop. Beeep Beeep Boop. Bopp Beeeeep. Beeep Bip Booop. Beeep Beeep Bip. Bopp Boooop. Beeep Beeep Beeep. Beeep Beeep Bopp. Beeep Beeep Booop');
//=> unicorns & rainbows
```

## Special Character Support

robo-talk can encode and decode special characters, so have some fun with your messages!

```js
robotalk.encode('🍕 + 🍺');
//=> 'Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Beeeeep Beeeep. Beeeep Bop. Boop Beeeep. Beeeep Bop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Bop Beeep Bip'
```

## API

### `robotTalk.encode(text)`

#### text

Type: `String`   

Encode your human message into robot talk.

### `robotTalk.decode(text)`

#### text

Type: `String`  

Decode your robot talk into human talk.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
