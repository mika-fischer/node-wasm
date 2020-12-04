# Simple example for using a rust-compiled wasm module in Node.js

## Prerequisites
* [Rust](https://www.rust-lang.org/learn/get-started)
* [Node.js](https://nodejs.org/en/)
* [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Build & Run
```
$ wasm-pack build --dev --target nodejs && node index.js
[INFO]: Checking for the Wasm target...
[INFO]: Compiling to Wasm...
    Finished dev [unoptimized + debuginfo] target(s) in 0.03s
[INFO]: Installing wasm-bindgen...
[INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
[INFO]: :-) Done in 0.38s
[INFO]: :-) Your wasm pkg is ready to publish at C:\Users\mfischer\src\rust\node-wasm\pkg.
Hello, node-wasm!
Got Uint8Array from Node.js: length   = 23
                             contents = "Greetings from Node.js!"
Got Uint8Array from WASM:    length   = 25
                             contents = "Greetings from rust/wasm!"
Sending invalid UTF-8
Got Uint8Array from Node.js: length   = 42
Caught error: Error: Failure parsing UTF-8
    at module.exports.__wbindgen_throw (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:222:11)
    at wasm_bindgen::throw_str::h3c12a144668bbbe0 (wasm-function[453]:0x172f8)
    at <core::result::Result<T,E> as wasm_bindgen::UnwrapThrowExt<T>>::expect_throw::hfe85ca0532fe0bf1 (wasm-function[85]:0xbb4f)
    at node_wasm::take_array_buffer::h2c0361b679b223ca (wasm-function[27]:0x564b)
    at take_array_buffer (wasm-function[411]:0x1687b)
    at module.exports.take_array_buffer (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:81:10)
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:13:5)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
Causing rust panic!
panicked at 'WASM Panic!!!', src\lib.rs:36:5

Stack:

Error
    at C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:180:15
    at C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:56:22
    at console_error_panic_hook::Error::new::hac4ebef91d64ee85 (wasm-function[450]:0x1721e)
    at console_error_panic_hook::hook_impl::h737a59fa982f69c6 (wasm-function[59]:0x98f7)
    at console_error_panic_hook::hook::hfc76d3b069bdf368 (wasm-function[502]:0x17dcc)
    at core::ops::function::Fn::call::hb07c70a2b7962822 (wasm-function[415]:0x1698c)
    at std::panicking::rust_panic_with_hook::hc5713da015ebaa19 (wasm-function[124]:0xe4a7)
    at std::panicking::begin_panic::{{closure}}::h002b3af62342f34a (wasm-function[183]:0x10ec6)
    at std::sys_common::backtrace::__rust_end_short_backtrace::h6ed881d6f4ba2b84 (wasm-function[309]:0x147c4)
    at std::panicking::begin_panic::h58c79a2a933a94cc (wasm-function[368]:0x15bd6)


Caught error: unreachable
    at __rust_start_panic (wasm-function[682]:0x196a2)
    at rust_panic (wasm-function[578]:0x18c4f)
    at std::panicking::rust_panic_with_hook::hc5713da015ebaa19 (wasm-function[124]:0xe4ce)
    at std::panicking::begin_panic::{{closure}}::h002b3af62342f34a (wasm-function[183]:0x10ec6)
    at std::sys_common::backtrace::__rust_end_short_backtrace::h6ed881d6f4ba2b84 (wasm-function[309]:0x147c4)
    at std::panicking::begin_panic::h58c79a2a933a94cc (wasm-function[368]:0x15bd6)
    at node_wasm::panic::h2a5ebda56260d7d8 (wasm-function[592]:0x18e5a)
    at panic (wasm-function[533]:0x1842c)
    at module.exports.panic (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:95:10)
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:20:5)
```