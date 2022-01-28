import React from "react";
import Entry from "./Entry";

const Persons = ({persons, handleDeleteEntry}) => {
    return (
        <div>
            <ul>
                {persons.map(person => <Entry key={person.id} entry={person}
                                              handleDeleteEntry={handleDeleteEntry}/>)}
            </ul>
        </div>)
}

export default Persons