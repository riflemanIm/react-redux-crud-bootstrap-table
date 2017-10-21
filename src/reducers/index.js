import { combineReducers } from "redux";
import { customersList, selectedCustomer } from "./reducerCustomers";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  customersList,
  selectedCustomer,
  loading,
  form: formReducer
});

function loading(state = false, action) {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    default:
      return state;
  }
}
