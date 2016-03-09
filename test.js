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

test('should encode special characters', t => {
	t.is(fn.encode('⫸Åß🐌🍔🍩🍕🍺🍪🍼'), 'Beeep Beeep Bip Bip Bip. Beeep Bopp Beeeeep. Bop Bop Beeeep. Booop Booop Beeeep Booop Beeeeep. Booop Blipp Beeeep Beeeep Bop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Beeeeep Bop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Bopp Beeeep. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Beeeeep Beeeep. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Bop Beeep Bip. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Bopp Boop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Bop Beeep Bop');
});

test('should decode special characters', t => {
	t.is(fn.decode('Beeep Beeep Bip Bip Bip. Beeep Bopp Beeeeep. Bop Bop Beeeep. Booop Booop Beeeep Booop Beeeeep. Booop Blipp Beeeep Beeeep Bop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Beeeeep Bop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Bopp Beeeep. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Beeeeep Beeeep. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Bop Beeep Bip. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Bopp Boop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Bop Beeep Bop'), '⫸Åß🐌🍔🍩🍕🍺🍪🍼');
});

test('should encode special characters', t => {
	t.is(fn.encode('🍕 + 🍺'), 'Booop Booop Beeeep Booop Blipp. Booop Beeeeep Beeep Beeeeep Beeeep. Beeeep Bop. Boop Beeeep. Beeeep Bop. Booop Booop Beeeep Booop Blipp. Booop Beeeeep Bop Beeep Bip');
});
