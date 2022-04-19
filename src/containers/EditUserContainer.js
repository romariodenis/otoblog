import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getUserDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User Updated!",
          "Title : " +
              this.props.getResponDataUser.title +
              " , Id : " +
              this.props.getResponDataUser.id,
              " , Content : " +
              this.props.getResponDataUser.content +
              " , Published At : " +
              this.props.getResponDataUser.published_at +
              " , Created At : " +
              this.props.getResponDataUser.created_at +
              " , Update At : " +
              this.props.getResponDataUser.updated_at,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User Oto</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
