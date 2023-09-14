import { ACT_DECREASE, ACT_INCREASE } from "../constrains";

const inittialState = 0;

export const countReducer = (state = inittialState, action) => {
  switch (action.type) {
    case ACT_INCREASE:
      return (state += 1);
    case ACT_DECREASE:
      return (state -= 1);

    default:
      return state;
  }
};
