import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCustomerAction,
  insertCustomerAction,
  updateCustomerAction
} from "../actions/actionsCustomers";
import toastr from "toastr";
import CustomerForm from "../components/CustomerForm";

export class CustomerAddEdit extends React.Component {
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id)
      this.props.dispatch(getCustomerAction(this.props.match.params.id));
  }

  handleSave(values) {
    const customer = {
      id: values.id,
      name: values.name,
      address: values.address,
      phone: values.phone
    };

    if (values.id)
      this.props.dispatch(updateCustomerAction(values.id, customer));
    else this.props.dispatch(insertCustomerAction(customer));
    this.props.history.replace("/customers");
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.replace("/customers");
  }

  render() {
    const { selectedCustomer } = this.props;
    const heading = selectedCustomer && selectedCustomer.id ? "Edit" : "Add";

    return (
      <CustomerForm
        heading={heading}
        handleSave={this.handleSave}
        handleCancel={this.handleCancel}
        initialValues={this.props.selectedCustomer}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const customerId = ownProps.match.params.id; //from the path '/edit/:id'
  if (
    customerId &&
    state.selectedCustomer.id &&
    parseInt(customerId) === state.selectedCustomer.id
  ) {
    return {
      selectedCustomer: state.selectedCustomer
    };
  } else return {};
};

CustomerAddEdit.propTypes = {
  selectedCustomer: PropTypes.object,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CustomerAddEdit);
