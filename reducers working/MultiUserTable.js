import React, { Component } from "react";
import { connect } from 'react-redux';
import HOCTable from "./HOCTable";
const couponsData = {
  fieldMap: ["couponId", "couponName", "status", "SearchField"],
  headers: ["Coupon Id", "Coupon Name", "Status", "SearchField"],
  searchFields: ["couponId", "couponName"],
  columns: [
    {
      Header: "Coupon Id",
      accessor: "couponId",
      sort: false,
      type: "String"
    },
    {
      Header: "Coupon Name",
      accessor: "couponName",
      sort: false,
      type: "String"
    },
    {
      Header: "Status",
      accessor: "status",
      sort: true,
      type: "Boolean"
    },
    {
      Header: "",
      accessor: "SearchField",
      sort: true,
      type: "String"
    }
  ]
};
class MultiUserTable extends Component {
  deactivateClickHandler = (e, rowItem) => {
    console.log("deactivate button clicked");
  };
  render() {
    const { fieldMap, headers, columns, searchFields } = couponsData;
    const { couponList } = this.props;
    return (
      <HOCTable
        fieldMap={fieldMap}
        headers={headers}
        columns={columns}
        rowData={couponList}
        searchFields={searchFields}
        deactivateClickHandler={this.deactivateClickHandler}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    couponList: state.coupons
  };
}

export default connect(mapStateToProps)(MultiUserTable);