import React from "react";
import PropTypes from "prop-types";
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

class CustomersTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      sortIndicator: true,
      noDataText: "No data",
      defaultSortName: "id",
      defaultSortOrder: "desc"
    };

    this.selectRowProp = {
      mode: "radio",
      bgColor: "#fcf8e3",
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
        onClick={() => this.props.onEditCustomer(row, rowIndex)}
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
        onClick={() => this.props.onDelCustomer(row, rowIndex)}
      >
        <i className="fa fa-trash-o" aria-hidden="true" /> Delete
      </button>
    );
  }

  render() {
    return (
      <BootstrapTable
        data={this.props.customersList}
        selectRow={this.selectRowProp}
        options={this.options}
        bordered={false}
        hover
        condensed
        pagination
      >
        <TableHeaderColumn
          dataField="id"
          isKey
          dataSort={true}
          caretRender={getCaret}
        >
          id
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="name"
          dataSort={true}
          caretRender={getCaret}
          //columnTitle
        >
          name
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="address"
          dataSort={true}
          caretRender={getCaret}
          //  filter={{ type: "TextFilter", delay: 0 }}
          //  columnTitle
        >
          address
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="phone"
          dataSort={true}
          caretRender={getCaret}
        >
          phone
        </TableHeaderColumn>
        <TableHeaderColumn dataField="button" dataFormat={this.editButton} />
        <TableHeaderColumn
          dataField="createdAt"
          dataSort={true}
          caretRender={getCaret}
          dataFormat={dateFormatter}
        >
          created
        </TableHeaderColumn>
        <TableHeaderColumn dataField="button" dataFormat={this.delButton} />
        <TableHeaderColumn
          dataField="updatedAt"
          dataSort={true}
          caretRender={getCaret}
          dataFormat={dateTimeFormatter}
        >
          updated
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

CustomersTable.propTypes = {
  customersList: PropTypes.array.isRequired
};

export default CustomersTable;
