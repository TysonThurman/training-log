/* eslint-disable react/prop-types */
import EntryRow from "./EntryRow";

export default function EntryTable({entries}){
    const rows = []
  
    entries.forEach((entry) =>{
      rows.push(
        <EntryRow
          entry={entry}
          key={entry.id} />
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