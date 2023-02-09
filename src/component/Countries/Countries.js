import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    } ,[])


    return (
        <div>
            <h1> Welcome To Rest Countries API</h1>
            <div className='country-container'>
            {
                countries.map(country=> <Country 

                    // Puro object takei pathabo..ja ja dorker hobe sekhan theke nibe 

                    country={country}
                    //-----> country num diye (object country-->ata map theke pao country ) ke pathailam

                    // // ekta ekta kore value niye korte chaile
                    // name={country.name.common}
                    // flag={country.flags.png}
                    // //Onek property hobe jodi onek dekhaite chai
                     ></Country>)
            }
            
        </div>
        </div>
        
    );
};

export default Countries;
