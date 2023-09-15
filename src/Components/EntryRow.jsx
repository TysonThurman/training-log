/* eslint-disable react/prop-types */
export default function EntryRow({ entry }) {
    return(
      <tr>
        <td>{entry.date.toDateString()}</td>
        <td>{entry.activity}</td>
        <td>{entry.category}</td>
        <td>{entry.hours}</td>
        <td>{entry.notes}</td>
      </tr>
    )
  }