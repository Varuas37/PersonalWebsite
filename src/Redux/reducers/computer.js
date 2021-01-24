import { OPEN_COMPUTER, CLOSE_COMPUTER } from "../action/types";

const initialState = {
  computerOpen: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case OPEN_COMPUTER:
      return {
        ...state,
        computerOpen: true,
      };
    case CLOSE_COMPUTER:
      return {
        ...state,
        computerOpen: false,
      };
    default:
        return state;
  }
}
