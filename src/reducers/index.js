import { combineReducers } from "redux";
import { costomersList, selectedCostomer, loading } from "./reducer_costomers";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  costomersList,
  selectedCostomer,
  loading,
  form: formReducer
});
