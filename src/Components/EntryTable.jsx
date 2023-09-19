/* eslint-disable react/prop-types */
import EntryRow from "./EntryRow";

export default function EntryTable({entries, removeEntry}){

    const rows = []
  
    entries.forEach((entry) =>{
      rows.push(
        <EntryRow
          entry={entry}
          key={entry.id}
          removeEntry={removeEntry} />
      );
    })
    return(
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Category</th>
            <th>Hours</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }