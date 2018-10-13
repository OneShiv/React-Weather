import React from 'react';

const forecastUI= props =>{
    debugger;
    var cc=props.va
    return(
        <div className="wt-cont">
        {props.va.map((element,index) =>{
                debugger;
                    return <div className="container_item" key={index}>{element.date}
                        <div>
                            <div>
                                <div>{element.day.maxtemp_c}ffff</div>
                                <div>{element.day.mintemp_c}</div>
                            </div>
                            <div>
                                <p>{element.day.condition.text}</p>
                                <img src={element.day.condition.icon}/>
                            </div>
                            <div>
                                <div>{element.astro.sunrise}</div>
                                <div>{element.astro.sunset}</div>
                            </div>
                            <div>{element.day.avghumidity}</div>
                        </div>
                    </div>    
            })}
        </div>
    )         
}

export default forecastUI;