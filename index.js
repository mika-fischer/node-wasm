const { greet, panic, return_boxed_u8_slice, take_u8_slice } = require('./pkg');

greet();

take_u8_slice(Buffer.from("Greetings from Node.js!"));

const buf = Buffer.from(return_boxed_u8_slice());
console.log(`Got u8 slice from WASM:      length   = ${buf.length}`);
console.log(`                             contents = "${buf.toString()}"`);

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