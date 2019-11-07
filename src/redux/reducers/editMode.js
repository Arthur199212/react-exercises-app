import { MOD_ON, MOD_OFF } from "../actions/actionTypes";

export default function(state = { status: false }, { type }) {
  switch (type) {
    case MOD_ON: {
      return { status: true }
    }
    case MOD_OFF: {
      return { status: false }
    }
    default:
      return state;
  }
}
