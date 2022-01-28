import React from "react";
import Entry from "./Entry";
import CountryInfo from "./CountryInfo";

const Countries = ({countries}) => {
    if (countries.length > 10) {
        return (
            <div><p>Too many matches, specify your filter</p></div>
        )
    } else if (countries.length === 1) {
        return (
            <CountryInfo country={countries[0]}/>
        )
    }
    return (
        <div>
            <ul>
                {countries.map(country => <Entry key={country.name.common.toLocaleString()} entry={country}/>)}
            </ul>
        </div>)
}

export default Countries