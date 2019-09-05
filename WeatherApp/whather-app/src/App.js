import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { createStore } from 'redux';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid,Col ,Row } from 'react-flexbox-grid';
import LocationList from './Components/LocationList';
import './App.css';
import ForecastExtended from './Components/ForecastExtended';
const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "washington,us",
  "Barcelona,es",
  "Madrid,es"
]

function App() {
  const [city] = useState("Buenos Aires,ar");
 const hanleSelecctionLocation = city =>
  {
    console.log(`hanleSelecctionLocation  ${city}`);
      city=city
  };
  return (
    <Grid>
      <Row>
          <AppBar position='sticky'>
              <Toolbar>
                <Typography>
                    Weather App
                </Typography>
              </Toolbar>
          </AppBar>
      </Row>
      <Row>
          <Col xs={12} md={6}> 
                <LocationList cities ={cities} 
                  onSelectedLocation={hanleSelecctionLocation}>
                </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}> 
                    <div className="details"> 
                     <ForecastExtended city ={city}></ForecastExtended>
                    </div>
            </Paper>
      
          </Col>

      </Row>

    </Grid>
  );
}

export default App;
