import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchCustomers,
  deleteCustomerAction
} from "../actions/actionsCustomers";
import CustomersTable from "../components/CustomersTable";

class Customers extends Component {
  constructor(props) {
    super(props);
    this.handleAddCustomer = this.handleAddCustomer.bind(this);
    this.onEditCustomer = this.onEditCustomer.bind(this);
    this.onDelCustomer = this.onDelCustomer.bind(this);
  }

  handleAddCustomer() {
    this.props.history.push("/customer");
  }

  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }
  onDelCustomer(row, rowIndex) {
    if (row.id) this.props.dispatch(deleteCustomerAction(row.id));
  }
  onEditCustomer(row, rowIndex) {
    this.props.history.push(`/customer/${row.id}`);
  }

  render() {
    const { isLoading, customersList } = this.props;
    return (
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div>
            <h1>Customers</h1>
            <div className="row mt-3">
              <div className="col text-right">
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleAddCustomer}
                  >
                    <i className="fa fa-plus" aria-hidden="true" /> New
                  </button>
                </div>
              </div>
            </div>
            <CustomersTable
              onEditCustomer={this.onEditCustomer}
              onDelCustomer={this.onDelCustomer}
              customersList={customersList}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  customersList: state.customersList
});
Customers.propTypes = {
  customersList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Customers);
