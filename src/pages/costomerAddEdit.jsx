import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { getCostomerAction, updateCostomerAction } from "../actions/actions";
import toastr from "toastr";
import CostomerForm from "../components/CostomerForm"; // eslint-disable-line import/no-named-as-default

export class CostomerAddEdit extends React.Component {
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id)
      this.props.dispatch(getCostomerAction(this.props.match.params.id));
  }

  handleSave(values) {
    const costomer = {
      id: values.id,
      name: values.name,
      address: values.address,
      phone: values.phone
    };
    console.log(costomer);
    this.props.dispatch(updateCostomerAction(values.id, costomer));
    this.props.history.replace("/");
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.replace("/");
  }

  render() {
    const { selectedCostomer } = this.props;
    const heading = selectedCostomer && selectedCostomer.id ? "Edit" : "Add";

    return (
      <CostomerForm
        heading={heading}
        handleSave={this.handleSave}
        handleCancel={this.handleCancel}
        initialValues={this.props.selectedCostomer}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const costomerId = ownProps.match.params.id; //from the path '/edit/:id'
  if (
    costomerId &&
    state.selectedCostomer.id &&
    parseInt(costomerId) === state.selectedCostomer.id
  ) {
    return {
      selectedCostomer: state.selectedCostomer
    };
  } else return {};
};

CostomerAddEdit.propTypes = {
  selectedCostomer: PropTypes.object,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CostomerAddEdit);
