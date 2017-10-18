import axios from "axios";

const COSTOMERS_URL = "http://localhost:8000/api/customers/";

export function loading(isLoading) {
  return { type: "LOADING", payload: isLoading };
}

export function addCostomer(add) {
  return { type: "COSTOMER_ADD", payload: add };
}
export function getCostomerResponse(data) {
  return { type: "SELECTED_COSTOMER", payload: data };
}
export function costomersSuccess(data) {
  return { type: "COSTOMERS_SUCCESS", payload: data };
}
export function error(text) {
  console.log(text);
  return { type: "ERROR", payload: text };
}
export function deleteCostomerAction(CostomerId) {
  //console.log(`${COSTOMERS_URL}${CostomerId}`);
  return dispatch => {
    dispatch(loading(true));
    axios
      .delete(`${COSTOMERS_URL}${CostomerId}`)
      .then(response => {
        dispatch(fetchCostomers());
      })
      .catch(() => dispatch(error("error delete Costomer")));
  };
}
export function updateCostomerAction(CostomerId, params) {
  //console.log(`${COSTOMERS_URL}${CostomerId}`);
  return dispatch => {
    dispatch(loading(true));
    axios
      .put(`${COSTOMERS_URL}${CostomerId}`, params)
      .then(response => {
        dispatch(loading(false));
      })
      .catch(() => dispatch(error("error update Costomer")));
  };
}
export function getCostomerAction(CostomerId) {
  //console.log(`${COSTOMERS_URL}${CostomerId}`);
  return dispatch => {
    dispatch(loading(true));
    axios
      .get(`${COSTOMERS_URL}${CostomerId}`)
      .then(response => {
        //console.log(response.data);
        dispatch(loading(false));
        dispatch(getCostomerResponse(response.data));
      })
      .catch(() => dispatch(error("error get Costomer")));
  };
}
export function fetchCostomers() {
  return dispatch => {
    dispatch(loading(true));
    axios
      .get(COSTOMERS_URL)
      .then(response => {
        //console.log(response.data);
        dispatch(loading(false));
        dispatch(costomersSuccess(response.data));
      })
      .catch(() => dispatch(error("error load Costomers")));
  };
}
