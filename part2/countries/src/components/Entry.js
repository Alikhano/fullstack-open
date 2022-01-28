import React, {useState} from "react";
import CountryInfo from "./CountryInfo";

const Entry = ({entry}) => {
    const [countryInfoVisibility, setCountryInfoVisibility] = useState(false)
    return (
        <li>
            {entry.name.common.toLocaleString()}
            <button onClick={() => setCountryInfoVisibility(true)}>show</button>
            {countryInfoVisibility ? <CountryInfo country={entry}/> : null}
        </li>
    )
}

export default Entry