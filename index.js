const { greet, panic, return_array_buffer, return_boxed_u8_slice, take_array_buffer, take_u8_slice } = require('./pkg');

greet();

take_array_buffer(Buffer.from("Greetings from Node.js!"));

take_u8_slice(Buffer.from("Greetings from Node.js via slice!"));

const buf = Buffer.from(return_array_buffer());
console.log(`Got Uint8Array from WASM:    length   = ${buf.length}`);
console.log(`                             contents = "${buf.toString()}"`);

const buf2 = Buffer.from(return_boxed_u8_slice());
console.log(`Got u8 slice from WASM:      length   = ${buf2.length}`);
console.log(`                             contents = "${buf2.toString()}"`);

console.log('Sending invalid UTF-8');
try {
    take_array_buffer(Buffer.alloc(42, 255));
} catch (err) {
    console.error('Caught error:', err);
}

console.log('Causing rust panic!');
try {
    panic();
} catch (err) {
    console.error('Caught error:', err);
}