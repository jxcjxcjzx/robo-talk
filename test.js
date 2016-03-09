import test from 'ava';
const fn = require('./');

test('api', t => {
	t.is(typeof fn, 'object');
	t.is(typeof fn.encode('a'), 'string');
	t.is(typeof fn.decode('beep'), 'string');
});

test('should encode values', t => {
	t.is(fn.encode('unicorns & rainbows'), 'Beeep Beeep Beeeeep. Beeep Beeep Bip. Beeep Bip Booop. Bopp Bopp. Beeep Beeep Beeep. Beeep Beeep Boop. Beeep Beeep Bip. Beeep Beeep Booop. Beeeep Bop. Beeeep Boooop. Beeeep Bop. Beeep Beeep Boop. Bopp Beeeeep. Beeep Bip Booop. Beeep Beeep Bip. Bopp Boooop. Beeep Beeep Beeep. Beeep Beeep Bopp. Beeep Beeep Booop');
});

test('should decode values', t => {
	t.is(fn.decode('Beeep Beeep Beeeeep. Beeep Beeep Bip. Beeep Bip Booop. Bopp Bopp. Beeep Beeep Beeep. Beeep Beeep Boop. Beeep Beeep Bip. Beeep Beeep Booop. Beeeep Bop. Beeeep Boooop. Beeeep Bop. Beeep Beeep Boop. Bopp Beeeeep. Beeep Bip Booop. Beeep Beeep Bip. Bopp Boooop. Beeep Beeep Beeep. Beeep Beeep Bopp. Beeep Beeep Booop'), 'unicorns & rainbows');
});
