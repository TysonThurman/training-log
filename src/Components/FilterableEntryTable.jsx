/* eslint-disable react/prop-types */
import EntryForm from "./EntryForm"
import EntryTable from "./EntryTable"
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function FilterableEntryTable() {
    // const [logEntries, setLogEntries] = useState([]);

    const [logEntries, setLogEntries] = useState(() => {
        const savedEntries = localStorage.getItem("logEntries");
        const initialEntries = JSON.parse(savedEntries);
        return initialEntries || [];
      });

    useEffect(() => {
        localStorage.setItem('logEntries', JSON.stringify(logEntries));
      }, [logEntries]);

    function addEntry(e) {
        let activity = e.target.activity.value;
        let category = e.target.category.value;
        let hours = e.target.hours.value;
        let date = e.target.date.value.toString();
        let notes = e.target.notes.value;
    
        let newEntry = {
            id: uuidv4(),
            category: category,
            date: date,
            activity: activity,
            hours: hours,
            notes: notes
          }
    
        setLogEntries([
            ...logEntries,
            newEntry
        ])

        localStorage.setItem('logEntries', JSON.stringify(logEntries));
    }

    function removeEntry(e) {
      console.log(e)
      // setLogEntries(logEntries.filter((_, i) => i !== key));
      setLogEntries(logEntries.filter((entry) => entry.id !== e));

      localStorage.setItem('logEntries', JSON.stringify(logEntries));
    }

    return(
      <div>
        <EntryForm addEntry={addEntry} />
        <EntryTable entries={logEntries} removeEntry={removeEntry} />
      </div>
    )
  }