import { h } from "./vendor/superfine";
export { text } from "./vendor/superfine";

export function div_(...children) {
  return h("div", {}, children);
}

export function p_(...children) {
  return h("p", {}, children);
}
