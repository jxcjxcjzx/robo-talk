'use strict';
var throwif = require('throwif');

var beeps = ['Bip', 'Beeep', 'Bop', 'Beeeep', 'Boop', 'Booop', 'Blipp', 'Beeeeep', 'Boooop', 'Bopp'];

module.exports.encode = function (text) {
	throwif(text, '!== string');
	var output = [];

	for (var char in text) {
		if (text.hasOwnProperty(char)) {
			var encoded = [];
			var charCodes = text[char].charCodeAt(0).toString().split('');
			for (var code in charCodes) {
				if (charCodes.hasOwnProperty(code)) {
					encoded.push(beeps[charCodes[code]]);
				}
			}
			output.push(encoded.join(' '));
		}
	}
	return output.join('. ');
};

module.exports.decode = function (text) {
	throwif(text, '!== string');
	var output = [];

	var encoded = text.split('. ');
	for (var char in encoded) {
		if (encoded.hasOwnProperty(char)) {
			var codes = encoded[char].split(' ');
			var character = [];
			for (var i in codes) {
				if (codes.hasOwnProperty(i)) {
					character.push(beeps.indexOf(codes[i]));
				}
			}
			output.push(String.fromCharCode(character.join('')));
		}
	}
	return output.join('');
};
