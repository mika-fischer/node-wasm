const { greet, panic, return_array_buffer, take_array_buffer } = require('./pkg');

greet();

take_array_buffer(Buffer.from("Greetings from Node.js!"));

const buf = Buffer.from(return_array_buffer());
console.log(`Got Uint8Array from WASM:    length   = ${buf.length}`);
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