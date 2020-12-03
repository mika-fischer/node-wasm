use js_sys::Uint8Array;
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
    console_log!("Hello, node-wasm!");
}

#[wasm_bindgen]
pub fn take_array_buffer(buf: Uint8Array) {
    console_log!("Got Uint8Array from Node.js: length   = {}", buf.length());
    // It is a bit unfortunate that we are forced to copy the data here...
    let s = String::from_utf8(buf.to_vec()).expect_throw("Failure parsing UTF-8");
    console_log!("                             contents = \"{}\"", &s);
}

#[wasm_bindgen]
pub fn return_array_buffer() -> Uint8Array {
    String::from("Greetings from rust/wasm!").as_bytes().into()
}
