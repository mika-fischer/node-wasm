use std::panic;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub fn greet() {
    console_error_panic_hook::set_once();
    console_log!("Hello, node-wasm!");
}

#[wasm_bindgen]
pub fn take_u8_slice(data: &[u8]) {
    console_log!("Got u8 slice from Node.js:   length   = {}", data.len());
    let s = std::str::from_utf8(data).expect_throw("Failure parsing UTF-8");
    console_log!("                             contents = \"{}\"", s);
}

#[wasm_bindgen]
pub fn return_boxed_u8_slice() -> Box<[u8]> {
    String::from("Greetings from rust/wasm!").as_bytes().into()
}

#[wasm_bindgen]
pub fn panic() {
    panic!("WASM Panic!!!");
}
