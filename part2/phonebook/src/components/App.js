import React, {useState, useEffect} from 'react'
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Notification from "./Notification";
import personService from '../services/person';

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notificationMessage, setNotificationMessage] = useState('')
    const [notificationType, setNotificationType] = useState('')


    useEffect(() => {
        personService.getAll().then(retrievedPersons => setPersons(retrievedPersons))
    }, [])

    const addNewPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber,
        }
        if (persons.some(person => areTwoPersonEqual(person, newPerson))) {
            const existingPerson = persons.find(p => areTwoPersonEqual(p, newPerson))
            if (window.confirm(`${existingPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
                personService.update(existingPerson.id, newPerson)
                    .then(updatedPerson => {
                        setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
                        handleNotification(`Entry for ${updatedPerson.name} is updated`, 'notification')
                    })
                    .catch(error => {
                        console.log(error)
                        handleNotification(`${newPerson.name} has already been deleted from server`, 'error')
                    })
            }
        } else {
            personService.create(newPerson).then(createdPerson => {
                setPersons(persons.concat(createdPerson))
                handleNotification(`Added ${createdPerson.name}`, 'notification')
            })
        }
        setNewName('')
        setNewNumber('')
    }

    const areTwoPersonEqual = (personOne, personTwo) => {
        return personOne.name === personTwo.name;
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const handleNotification = (message, type) => {
        setNotificationMessage(message)
        setNotificationType(type)
        setTimeout(() => {
            setNotificationMessage(null)
        }, 5000)
    }

    const removePerson = id => {
        const personToDelete = persons.find(person => person.id === id)
        if (window.confirm(`Delete ${personToDelete.name}?`)) {
            personService.deletePerson(id).then(() => setPersons(persons.filter(person => person.id !== personToDelete.id)))
        }
    }

    const personsToShow = filter !== '' ? persons.filter(person => person.name.includes(filter)) : persons

    return (        <div>
            <h2>Phonebook</h2>

            <Notification message={notificationMessage} styleType={notificationType}/>

            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h3>Add new number</h3>

            <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
                        handleNumberChange={handleNumberChange} addNewPerson={addNewPerson}/>

            <h3>Numbers</h3>

            <Persons persons={personsToShow} handleDeleteEntry={removePerson}/>
        </div>
    )
}

export default App