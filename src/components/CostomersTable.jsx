import React, { PropTypes } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const getCaret = direction => {
  if (direction === "asc") {
    return (
      <span>
        {" "}
        <i className="fa fa-sort-asc" aria-hidden="true" />
      </span>
    );
  }

  if (direction === "desc") {
    return (
      <span>
        {" "}
        <i className="fa fa-sort-desc" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span>
      {" "}
      <i className="fa fa-sort" aria-hidden="true" />
    </span>
  );
};

const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};

const dateFormatter = (cell, row) => {
  const d = new Date(cell);
  //return d;
  return `${("0" + d.getDate()).slice(-2)}.${("0" + (d.getMonth() + 1)).slice(
    -2
  )}.${d.getFullYear()}`;
};
const dateTimeFormatter = (cell, row) => {
  const d = new Date(cell);
  //return d;
  return `${("0" + d.getDate()).slice(-2)}.${("0" + (d.getMonth() + 1)).slice(
    -2
  )}.${d.getFullYear()}<br/>${d.getHours()}:${d.getMinutes()} `;
};
class CostomersTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      sortIndicator: true,
      noDataText: "No data"
    };

    this.selectRowProp = {
      mode: "radio",
      bgColor: "#c1f291",
      onSelect: props.handleRowSelect,
      clickToSelect: true,
      hideSelectColumn: true
    };
    this.editButton = this.editButton.bind(this);
    this.delButton = this.delButton.bind(this);
  }
  editButton(cell, row, enumObject, rowIndex) {
    return (
      <button
        type="button"
        className="btn btn-warning ml-2"
        onClick={() => this.props.onEditCostomer(row, rowIndex)}
      >
        <i className="fa fa-pencil" aria-hidden="true" /> Edit
      </button>
    );
  }
  delButton(cell, row, enumObject, rowIndex) {
    return (
      <button
        type="button"
        className="btn btn-danger ml-2"
        onClick={() => this.props.onDelCostomer(row, rowIndex)}
      >
        <i className="fa fa-trash-o" aria-hidden="true" /> Delete
      </button>
    );
  }
  render() {
    return (
      <BootstrapTable
        data={this.props.costomersList}
        selectRow={this.selectRowProp}
        options={this.options}
        bordered={false}
        hover
        condensed
      >
        <TableHeaderColumn dataField="id" isKey>
          Id
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="name"
          dataSort={true}
          //caretRender={getCaret}
          //columnTitle
        >
          name
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="address"
          dataSort={true}
          //  caretRender={getCaret}
          //  filter={{ type: "TextFilter", delay: 0 }}
          //  columnTitle
        >
          address
        </TableHeaderColumn>

        <TableHeaderColumn dataField="phone" dataSort={true}>
          phone
        </TableHeaderColumn>
        <TableHeaderColumn dataField="button" dataFormat={this.editButton} />
        <TableHeaderColumn
          dataField="createdAt"
          dataSort={true}
          dataFormat={dateFormatter}
        >
          created
        </TableHeaderColumn>
        <TableHeaderColumn dataField="button" dataFormat={this.delButton} />
        <TableHeaderColumn
          dataField="updatedAt"
          dataSort={true}
          dataFormat={dateTimeFormatter}
        >
          updated
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

CostomersTable.propTypes = {
  costomersList: PropTypes.array.isRequired,
  handleRowSelect: PropTypes.func.isRequired
};

export default CostomersTable;
