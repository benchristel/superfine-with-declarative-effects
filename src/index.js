import { patch } from "./vendor/superfine";
import { App, initialState } from "./App";

function Updater(state) {
  return (mutation) => (event) => render(mutation(state, event));
}

function render(state) {
  patch(document.getElementById("app"), App(Updater(state), state));
}

render(initialState);
