
import React, { Component } from 'react';
import { Hexagon } from 'tiled-hexagons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style';
class Mainpage extends React.Component {
    
    render() {
      return ( 
      
       
            <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto"> <Hexagon
     
     sideLength={40}
     text="Hi"
     textStyle={{ fill: 'blue' }}
   /></Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  
</Container>
     
       
     )
    ;
    }
  }
  export default Mainpage;