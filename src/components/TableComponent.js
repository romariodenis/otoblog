import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUser } from "../actions/userAction";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
}


const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%", };
      },
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "content",
      text: "Content",
      sort: true,
    },
    {
      dataField: "published_at",
      text: "Published At",
      sort: true,
    },
    {
      dataField: "created_at",
      text: "Created At",
      sort: true,
    },
    {
      dataField: "updated_at",
      text: "Updated At",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="info" className="mr-2">
                <FontAwesomeIcon icon={faInfo} color="white" /> Detail
              </Button>
            </Link>
  
            <Link to={"edit/" + row.id}>
              <Button color="light" className="mr-2">
                <FontAwesomeIcon icon={faEdit} color="#042cb4" /> Edit
              </Button>
            </Link>
  
            <Button color="danger" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} color="white" /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  
  return (
    <Container style={{
      color: "#BBBBBB",
      fontSize: "13px",
      fontFamily: "Poppins,sans-serif",
      borderRadius: "10px", 
      border: "2px solid",
      padding: 10,
      fontWeight: 600,
      marginBottom: 100 
    }}>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          style={{
            marginTop: "10px",
          }}
        >
          {(props) => (
            <div>
              <Row >
                <Col >
                  <Link to="/create">
                    <Button color="info" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User Otoklix
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable 
                {...props.baseProps}
                pagination={paginationFactory()}

              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
