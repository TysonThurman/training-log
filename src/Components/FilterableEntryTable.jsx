/* eslint-disable react/prop-types */
import EntryForm from "./EntryForm"
import EntryTable from "./EntryTable"
import { useState, useEffect } from "react";

export default function FilterableEntryTable() {
    const [logEntries, setLogEntries] = useState([]);

    useEffect(() => {
        localStorage.getItem('logEntries', JSON.stringify(logEntries));
      }, [logEntries]);

    function addEntry(e) {
        e.preventDefault();
        let activity = e.target.activity.value;
        let category = e.target.category.value;
        let hours = e.target.hours.value;
        let date = e.target.date.value.toString();
        let notes = e.target.notes.value;
    
        let newEntry = {
            id:1,
            category:category,
            date: date,
            activity: activity,
            hours: hours,
            notes:notes
          }
    
        setLogEntries([
            ...logEntries,
            newEntry
        ])

        localStorage.setItem('logEntries', JSON.stringify(logEntries));
    }

    return(
      <div>
        <EntryForm addEntry={addEntry} />
        <EntryTable entries={logEntries} />
      </div>
    )
  }