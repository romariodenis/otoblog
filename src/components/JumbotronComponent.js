import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import Oto from '../../src/assets/mntr.png';
const mapStateToProps = (state) => {
  return {
    title: state.users.title
  }
}

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container >
          <h1 className="display-3">{props.title}</h1>
          <p style={{
                  color: "#fc6404",
                  fontSize: "22px",
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: 800
                }}>
          Lebih Untung Booking Bengkel Di Otoklix
          </p>
          <p style={{
                  color: "#042cb4",
                  fontSize: "28px",
                  marginTop: "-20px",
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: 800
                }}>
            Free Inspeksi di Jakarta Selatan & Bekasi
          </p>
            <Button color="light"><a href="https://otoklix.com">
            Ke Situs Resmi Otoklix </a></Button>
        <img src={Oto}
            style={{ width: "550px", float: "right", marginLeft:"150px", marginTop: "-265px" }}  alt="down-arrow" />
          
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
