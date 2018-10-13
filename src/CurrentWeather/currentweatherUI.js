import React from 'react';

const forecastUI= props =>{
    debugger;
    var cc=props.current_weather
    return(
        <div className="current_weather_container">
            <div className="area">
                <span>{props.current_weather.location.name}</span>
                <span>{props.current_weather.location.region}</span>
                <span>{props.current_weather.location.country}</span>
            </div>
            <div className="lastupdated">
                <span>{props.current_weather.location.localtime}</span>
            </div>
            <div className="current_weather">
                <div className="temp">
                    <div className="temp_type">
                        <p>{props.current_weather.current.condition.text}</p>
                        <img src={props.current_weather.current.condition.icon}/>
                    </div>
                    <div className="temp_c">{props.current_weather.current.temp_c}
                    </div>
                </div>
                <div className="other">
                    <div>{props.current_weather.current.condition.humidity}</div>
                    <div>{props.current_weather.current.condition.wind}</div>
                </div>
            </div>
        </div>
    )         
}

export default forecastUI;