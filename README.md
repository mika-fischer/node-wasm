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
[INFO]: :-) Done in 0.37s
[INFO]: :-) Your wasm pkg is ready to publish at C:\Users\mfischer\src\rust\node-wasm\pkg.
Hello, node-wasm!
Got u8 slice from Node.js:   length   = 23
                             contents = "Greetings from Node.js!"
Got u8 slice from WASM:      length   = 25
                             contents = "Greetings from rust/wasm!"
Sending invalid UTF-8
Caught error: ReferenceError: take_array_buffer is not defined
    at Object.<anonymous> (C:\Users\mfischer\src\rust\node-wasm\index.js:13:5)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
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