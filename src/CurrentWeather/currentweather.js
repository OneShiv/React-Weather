import React from 'react';
import CUI from './currentweatherUI';
const currentweather= props =>{
    debugger;
    if(props.today!==false){
        var x=props.today;
    }
    return(
        <div>
        {props.today!==false
        ? <CUI current_weather={x}/>
        : <h1>No data Found</h1>}
        </div>
    );
}


export default currentweather;