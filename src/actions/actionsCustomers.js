import axios from "axios";
import toastr from "toastr";
import { CUSTOMERS_URL, loading, error } from "./";

export function addCustomer(add) {
  return { type: "CUSTOMER_ADD", payload: add };
}
export function getCustomerResponse(data) {
  return { type: "SELECTED_CUSTOMER", payload: data };
}
export function customersSuccess(data) {
  return { type: "CUSTOMERS_SUCCESS", payload: data };
}

export function deleteCustomerAction(CustomerId) {
  return dispatch => {
    dispatch(loading(true));
    axios
      .delete(`${CUSTOMERS_URL}${CustomerId}`)
      .then(response => {
        dispatch(loading(false));
        toastr.success("Customer deleted");
        dispatch(fetchCustomers());
      })
      .catch(() => dispatch(error("error delete Customer")));
  };
}

export function updateCustomerAction(CustomerId, params) {
  return dispatch => {
    dispatch(loading(true));
    axios
      .put(`${CUSTOMERS_URL}${CustomerId}`, params)
      .then(response => {
        dispatch(loading(false));
        toastr.success("Customer saved");
      })
      .catch(() => dispatch(error("error update Customer")));
  };
}

export function insertCustomerAction(params) {
  return dispatch => {
    dispatch(loading(true));
    axios
      .post(`${CUSTOMERS_URL}`, params)
      .then(response => {
        dispatch(loading(false));
        toastr.success("Customer added");
      })
      .catch(() => dispatch(error("error update Customer")));
  };
}

export function getCustomerAction(CustomerId) {
  return dispatch => {
    dispatch(loading(true));
    axios
      .get(`${CUSTOMERS_URL}${CustomerId}`)
      .then(response => {
        dispatch(loading(false));
        dispatch(getCustomerResponse(response.data));
      })
      .catch(() => dispatch(error("error get Customer")));
  };
}
export function fetchCustomers() {
  return dispatch => {
    dispatch(loading(true));
    axios
      .get(CUSTOMERS_URL)
      .then(response => {
        dispatch(loading(false));
        dispatch(customersSuccess(response.data));
      })
      .catch(() => dispatch(error("error load Customers")));
  };
}
