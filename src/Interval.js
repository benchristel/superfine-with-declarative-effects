import { h } from "superfine";

const tag = "x-interval";

export function Interval({ ms, onTick }) {
  return h(tag, { ms, onTick });
}

customElements.define(
  tag,
  class IntervalElement extends HTMLElement {
    static get observedAttributes() {
      return ["ms"];
    }

    connectedCallback() {
      console.debug("connected Interval");
      this.start();
    }

    disconnectedCallback() {
      console.debug("disconnected Interval");
      this.stop();
    }

    start() {
      this.interval = setInterval(() => {
        console.debug("tick");
        this.props.onTick();
      }, this.props.ms);
    }

    stop() {
      clearInterval(this.interval);
    }
  }
);
