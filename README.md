# Simple example for using a rust-compiled wasm module in Node.js

## Prerequisites
* [Rust](https://www.rust-lang.org/learn/get-started)
* [Node.js](https://nodejs.org/en/)
* [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Build & Run
```
$ wasm-pack build --target nodejs && node index.js
[INFO]: Checking for the Wasm target...
[INFO]: Compiling to Wasm...
   Compiling node-wasm v0.1.0 (C:\Users\mfischer\src\rust\node-wasm)
    Finished release [optimized] target(s) in 0.26s
[INFO]: Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
[INFO]: :-) Done in 0.78s
[INFO]: :-) Your wasm pkg is ready to publish at C:\Users\mfischer\src\rust\node-wasm\pkg.
Hello, node-wasm!
Got Uint8Array from Node.js: length   = 23
                             contents = "Greetings from Node.js!"
Got Uint8Array from WASM:    length   = 25
                             contents = "Greetings from rust/wasm!"
Sending invalid UTF-8
Got Uint8Array from Node.js: length   = 42
C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:104
    throw new Error(getStringFromWasm0(arg0, arg1));
    ^

Error: Failure parsing UTF-8
    at module.exports.__wbindgen_throw (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:104:11)
    at wasm-function[69]:0x4847
    at wasm-function[14]:0x2a5f
    at module.exports.take_array_buffer (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:60:10)
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:12:1)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
```