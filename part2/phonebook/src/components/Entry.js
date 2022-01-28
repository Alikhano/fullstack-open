const Entry = ({entry, handleDeleteEntry}) => {
    return (
        <li>
            {entry.name} {entry.number}
            <button onClick={() => handleDeleteEntry(entry.id)}>delete</button>
        </li>
    )
}

export default Entry