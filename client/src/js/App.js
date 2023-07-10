// import logo from '../logo.svg';
import '../css/App.css';
import React from 'react';
import landingPageBG from "../assets/landing-page.jpg";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
import {Button, Container, Row, Col} from 'react-bootstrap'
import axios from "axios";
import { Link } from 'react-router-dom';

const container_style = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3,
  lng: -40
}

const no_padding = {
  paddingLeft: 0,
  paddingRight: 0
}

const grid_padding = {
  grid: {
    no_padding
  },
  row: {
    marginLeft: 0,
    marginRight: 0
  },
  col: {
    no_padding
  }
}

function App() {
  return (
    <div className="App">
      <Container className="App-header">
        <h1 className='main-title'>Christina's Hair Salon</h1>
      </Container>
      <Container className='App-body' fluid="true">
          <Row id='bootstrap-row' className="">
            <p>Appointment by phone or online only</p>      
            <Col className="justify-content-center">
              <Button href='calendar' variant='light' className='Appointment-button'>Create an Appointment</Button>
            </Col>
            {/* <Col className="">
              <img src={landingPageBG} className="haircut-img" />  
            </Col> */}
            {/* <Col>
              <iframe width="100" height="100" style="border: 0" loading="lazy" allowfullscreen="false"
                    referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.9696987654493!2d-95.
                23911238457195!3d29.66265364346107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864097f2b48998d3%3A0x5762eda6d30a46fe!2s
                College%20Hair%20%26%20Nails!5e0!3m2!1sen!2sus!4v1652242239694!5m2!1sen!2sus">
                </iframe>
            </Col> */}
          </Row>
        </Container>
        <Container className="prices">
          <p>Prices Section</p>
        </Container>
        <Container className='contact'>
          <p>Contact Section</p>
        </Container>
    </div>
  );
}

// function Hello() {
  
// }

export default App;
