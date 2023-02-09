
import React from "react";
import './Country.css'
const Country = (props) => {
    
    // props er vitor pura country tai asche object hisabe 
    //---> jegula data lagbe segulake distrucharing kore nibo
    console.log(props.country)
    const{name,capital,region,area,flags}=props.country;

    return (
        <div className="country-design">
            <h3>Name: {name.common}</h3>
            <p> Capital: {capital}</p>
            <p> Region:{region}</p>
            <p> Area:{area}</p>
            <img src={flags.png} alt=" natonal flag" />
        </div>
    );
};

export default Country;