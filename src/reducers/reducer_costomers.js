import _ from "lodash";

export function costomersList(state = [], action) {
  switch (action.type) {
    case "COSTOMERS_SUCCESS":
      return action.payload;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    default:
      return state;
  }
}

export function selectedCostomer(state = {}, action) {
  switch (action.type) {
    case "SELECTED_COSTOMER":
      return action.payload;
    default:
      return state;
  }
}
