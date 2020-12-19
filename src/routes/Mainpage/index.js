
import React, { Component } from 'react';
import { Hexagon } from 'tiled-hexagons';
import Container from 'react-bootstrap/Container';

import { Link } from 'preact-router/match';
import { Card,Cell,CardHeader, CardBody,CardFooter,Button,Icon } from 'preact-fluid';
import './style';
class Mainpage extends React.Component {
    
    render() {
      return ( 
      
       
            <div>
              <div><div class="frame">
    <div class="hex-outer h1"></div>
    <div class="hex-outer h2"></div>
    <div class="hex-outer h3"></div>
    <div class="hex-inner h1"></div>
    <div class="hex-inner h2"></div>
    <div class="hex-inner h3"></div>
    <div class="label"><Link style={{fontSize:'50px', color:'white' }} href="/home"><h3>Find</h3></Link></div>
    
  </div></div>
              
  
 
  
  
</div>
     
       
     )
    ;
    }
  }
  export default Mainpage;