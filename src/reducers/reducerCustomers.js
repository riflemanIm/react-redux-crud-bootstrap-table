import _ from "lodash";

export function customersList(state = [], action) {
  switch (action.type) {
    case "CUSTOMERS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
}

export function selectedCustomer(state = {}, action) {
  switch (action.type) {
    case "SELECTED_CUSTOMER":
      return action.payload;
    default:
      return state;
  }
}
