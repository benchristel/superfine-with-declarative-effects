import { div_, p_, text } from "./html";
import { Interval } from "./Interval";

// Model
export const initialState = { tMinus: 10 };

const tick = (state) => ({
  ...state,
  tMinus: state.tMinus - 1,
});

// View / Controller
export function App(perform, state) {
  const { tMinus } = state;
  return div_(
    p_(text("countdown: " + tMinus)),
    tMinus > 0 && Interval({ ms: 1000, onTick: perform(tick) })
  );
}
