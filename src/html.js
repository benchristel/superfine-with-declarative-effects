import { h } from "superfine";
export { text } from "superfine";

export function div_(...children) {
  return h("div", {}, children);
}

export function p_(...children) {
  return h("p", {}, children);
}
