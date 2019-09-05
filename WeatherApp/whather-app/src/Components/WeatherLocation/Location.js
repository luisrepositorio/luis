import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
Location = ({ city }) => (
    <div className="locationCont">
        <h1>
            {city}
        </h1>
    </div>
);
    //Location = (props) => {
    //const city = props.city;
    //Destructuring
    //const { city } = props;
   

   
    Location.propTypes = 
    {
        city: PropTypes.string.isRequired,  
    };
export default Location;
