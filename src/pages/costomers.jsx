import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCostomers, deleteCostomerAction } from "../actions/actions";
import CostomersTable from "../components/CostomersTable";

class Costomers extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedCostomerId: undefined };

    this.handleAddCostomer = this.handleAddCostomer.bind(this);
    this.handleEditCostomer = this.handleEditCostomer.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
    this.handleRowSelect = this.handleRowSelect.bind(this);
    this.onEditCostomer = this.onEditCostomer.bind(this);
    this.onDelCostomer = this.onDelCostomer.bind(this);
  }

  handleAddCostomer() {
    this.props.history.push("/add");
  }

  componentDidMount() {
    this.props.dispatch(fetchCostomers());
  }
  onDelCostomer(row, rowIndex) {
    console.log("delete");
    this.props.dispatch(deleteCostomerAction(row.id));
    //this.setState({ selectedCostomerId: undefined });
    //this.props.history.push(`/edit/${row.id}`);
  }
  onEditCostomer(row, rowIndex) {
    //console.log("row #", this.props);
    // this.setState({ selectedCostomerId: undefined });
    this.props.history.push(`/edit/${row.id}`);
  }

  handleEditCostomer() {
    const selectedCostomerId = this.state.selectedCostomerId;
    console.log("selectedCostomerId", selectedCostomerId);
    if (selectedCostomerId) {
      // this.setState({ selectedCostomerId: undefined });
      this.props.history.push(`/edit/${selectedCostomerId}`);
    }
  }

  handleRowSelect(row, isSelected) {
    //console.log(row);
    if (isSelected) {
      this.setState({ selectedCostomerId: row.id });
    }
  }

  render() {
    console.log(this.props);
    const { isLoading, costomersList } = this.props;
    return (
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div>
            <h1>Costomers</h1>
            <div className="row mt-3">
              <div className="col text-right">
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleAddCostomer}
                  >
                    <i className="fa fa-plus" aria-hidden="true" /> New
                  </button>
                </div>
              </div>
            </div>
            <CostomersTable
              handleRowSelect={this.handleRowSelect}
              onEditCostomer={this.onEditCostomer}
              onDelCostomer={this.onDelCostomer}
              costomersList={costomersList}
              //activePage={2}
              //onNavigatePage={this.onNavigatePage}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  costomersList: state.costomersList
});
Costomers.propTypes = {
  costomersList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Costomers);
