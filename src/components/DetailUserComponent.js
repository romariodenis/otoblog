import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Title</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.title}</td>
        </tr>
        <tr>
          <td width="200">Content</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.content}</td>
        </tr>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.id}</td>
        </tr>
        <tr>
          <td width="200">Published At</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.published_at}</td>
        </tr>
        <tr>
          <td width="200">Created At</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.created_at}</td>
        </tr>
        <tr>
          <td width="200">Updated At</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.updated_at}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
