import {useEffect, useState} from "react";
import Filter from "./Filter";
import countriesService from '../services/countries'
import Countries from "./Countries";

function App() {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    useEffect(() => {
        countriesService.getAllCountries().then(allCountries => setCountries(allCountries))
    }, [])

    const countriesToShow = filter !== '' ? countries.filter(country =>
        country.name.common.toLocaleString().toLowerCase().includes(filter.toLowerCase())
    ) : countries
    return (
        <div>
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <Countries countries={countriesToShow}/>
        </div>
    );
}

export default App;
