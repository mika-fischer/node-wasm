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
Got u8 slice from Node.js:   length   = 23
                             contents = "Greetings from Node.js!"
Got u8 slice from WASM:      length   = 25
                             contents = "Greetings from rust/wasm!"
Sending invalid UTF-8
Got u8 slice from Node.js:   length   = 42
Caught error: Error: Failure parsing UTF-8
    at module.exports.__wbindgen_throw (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:214:11)
    at wasm_bindgen::throw_str::h3c12a144668bbbe0 (wasm-function[349]:0x126fe)
    at <core::result::Result<T,E> as wasm_bindgen::UnwrapThrowExt<T>>::expect_throw::h6c4edd957955ae1e (wasm-function[103]:0xc02c)
    at node_wasm::take_u8_slice::h1e53caad02764231 (wasm-function[24]:0x5b6e)
    at take_u8_slice (wasm-function[127]:0xd101)
    at module.exports.take_u8_slice (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:80:10)
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:13:5)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
Causing rust panic!
panicked at 'WASM Panic!!!', src\lib.rs:34:5

Stack:

Error
    at C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:197:15
    at C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:45:22
    at console_error_panic_hook::Error::new::hac4ebef91d64ee85 (wasm-function[348]:0x1269e)
    at console_error_panic_hook::hook_impl::h737a59fa982f69c6 (wasm-function[45]:0x8333)
    at console_error_panic_hook::hook::hfc76d3b069bdf368 (wasm-function[384]:0x12ec3)
    at core::ops::function::Fn::call::hb07c70a2b7962822 (wasm-function[321]:0x12004)
    at std::panicking::rust_panic_with_hook::hc5713da015ebaa19 (wasm-function[86]:0xb2b0)
    at std::panicking::begin_panic::{{closure}}::h378ac0fe68b405a2 (wasm-function[138]:0xd7c2)
    at std::sys_common::backtrace::__rust_end_short_backtrace::hcad540935d118ba2 (wasm-function[239]:0x10590)
    at std::panicking::begin_panic::h645bd6161b1ba903 (wasm-function[292]:0x117b0)


Caught error: RuntimeError: unreachable
    at __rust_start_panic (wasm-function[520]:0x1414e)
    at rust_panic (wasm-function[444]:0x13a4a)
    at std::panicking::rust_panic_with_hook::hc5713da015ebaa19 (wasm-function[86]:0xb2d7)
    at std::panicking::begin_panic::{{closure}}::h378ac0fe68b405a2 (wasm-function[138]:0xd7c2)
    at std::sys_common::backtrace::__rust_end_short_backtrace::hcad540935d118ba2 (wasm-function[239]:0x10590)
    at std::panicking::begin_panic::h645bd6161b1ba903 (wasm-function[292]:0x117b0)
    at node_wasm::panic::h2a5ebda56260d7d8 (wasm-function[453]:0x13b9c)
    at panic (wasm-function[409]:0x133da)
    at module.exports.panic (C:\Users\mfischer\src\rust\node-wasm\pkg\node_wasm.js:115:10)
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:20:5)
```