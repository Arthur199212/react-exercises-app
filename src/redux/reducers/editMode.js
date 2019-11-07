import { MOD_ON, MOD_OFF } from "../actions/actionTypes";

export default function(state = false, { type }) {
  switch (type) {
    case MOD_ON: {
      return true
    }
    case MOD_OFF: {
      return false
    }
    default:
      return state;
  }
}
