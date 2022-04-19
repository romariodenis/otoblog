import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if(this.props.errorResponDataUser)
      {
        swal(
            "Failed!",
            this.props.errorResponDataUser,
            "error"
          );
      }else {
        swal(
            "User Created!",
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
        <h1>Create User Oto</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
