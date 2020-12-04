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
Got u8 slice from Node.js:   length   = 33
                             contents = "Greetings from Node.js via slice!"
Got Uint8Array from WASM:    length   = 25
                             contents = "Greetings from rust/wasm!"
Got u8 slice from WASM:      length   = 35
                             contents = "Greetings from rust/wasm via slice!"
Sending invalid UTF-8
Got Uint8Array from Node.js: length   = 42
Caught error: Error: Failure parsing UTF-8
    at module.exports.__wbindgen_throw (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:258:11)
    at wasm_bindgen::throw_str::h3c12a144668bbbe0 (wasm-function[472]:0x17f9a)
    at <core::result::Result<T,E> as wasm_bindgen::UnwrapThrowExt<T>>::expect_throw::hfe85ca0532fe0bf1 (wasm-function[87]:0xbf7a)
    at node_wasm::take_array_buffer::h2c0361b679b223ca (wasm-function[27]:0x56a1)
    at take_array_buffer (wasm-function[429]:0x174da)
    at module.exports.take_array_buffer (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:81:10)
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:19:5)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
Causing rust panic!
panicked at 'WASM Panic!!!', src\lib.rs:50:5

Stack:

Error
    at C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:216:15
    at C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:56:22
    at console_error_panic_hook::Error::new::hac4ebef91d64ee85 (wasm-function[469]:0x17ec0)
    at console_error_panic_hook::hook_impl::h737a59fa982f69c6 (wasm-function[60]:0x9bf9)
    at console_error_panic_hook::hook::hfc76d3b069bdf368 (wasm-function[521]:0x18a6f)
    at core::ops::function::Fn::call::hb07c70a2b7962822 (wasm-function[434]:0x1762e)
    at std::panicking::rust_panic_with_hook::hc5713da015ebaa19 (wasm-function[127]:0xe9ce)
    at std::panicking::begin_panic::{{closure}}::h002b3af62342f34a (wasm-function[190]:0x116a4)
    at std::sys_common::backtrace::__rust_end_short_backtrace::h6ed881d6f4ba2b84 (wasm-function[321]:0x15206)
    at std::panicking::begin_panic::h58c79a2a933a94cc (wasm-function[387]:0x16889)


Caught error: RuntimeError: unreachable
    at __rust_start_panic (wasm-function[701]:0x1a346)
    at rust_panic (wasm-function[597]:0x198f3)
    at std::panicking::rust_panic_with_hook::hc5713da015ebaa19 (wasm-function[127]:0xe9f5)
    at std::panicking::begin_panic::{{closure}}::h002b3af62342f34a (wasm-function[190]:0x116a4)
    at std::sys_common::backtrace::__rust_end_short_backtrace::h6ed881d6f4ba2b84 (wasm-function[321]:0x15206)
    at std::panicking::begin_panic::h58c79a2a933a94cc (wasm-function[387]:0x16889)
    at node_wasm::panic::h2a5ebda56260d7d8 (wasm-function[611]:0x19afe)
    at panic (wasm-function[552]:0x190d0)
    at module.exports.panic (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:141:10)
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:26:5)
```