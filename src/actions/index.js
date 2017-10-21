import toastr from "toastr";

export const CUSTOMERS_URL = "http://localhost:8000/api/customers/";

export function loading(isLoading) {
  return { type: "LOADING", payload: isLoading };
}
export function error(text) {
  toastr.error(error);
  return { type: "ERROR", payload: text };
}
