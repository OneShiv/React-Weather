import React from 'react';
import FUI from './forecastUI';
const forecast= props =>{
    debugger;
    if(props.value!==false)
var x=props.value.forecast.forecastday;
    return(
        <div className="weather_container">
        {props.value!==false
        ? <FUI va={x}/>
        : <h1>No data Found</h1>}
        </div>
    );
}


export default forecast;