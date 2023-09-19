/* eslint-disable react/prop-types */
export default function EntryRow({ entry, removeEntry }) {
    return(
      <tr>
        <td>{entry.date.toString()}</td>
        <td>{entry.activity}</td>
        <td>{entry.category}</td>
        <td>{entry.hours}</td>
        <td>{entry.notes}</td>
        <td><button className="edit-btn">Edit</button></td>
        <td><button onClick={() => removeEntry(entry.id)} className="delete-btn">Delete</button></td>
      </tr>
    )
  }