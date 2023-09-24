/* eslint-disable react/prop-types */
import EntryForm from "./EntryForm"
import EntryTable from "./EntryTable"
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Modal from "./Modal";

export default function FormAndTable() {

    const [logEntries, setLogEntries] = useState(() => {
        const savedEntries = localStorage.getItem("logEntries");
        const initialEntries = JSON.parse(savedEntries);
        return initialEntries || [];
      });

    const [deleteClicked, setDeleteClicked] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);


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

    //Need a way to pass the key to the Modal
    function removeEntry(id) {
      setDeleteClicked(true);
      confirmDelete && setLogEntries(logEntries.filter((entry) => entry.id !== id));
    }

    return(
      <div>
        <EntryForm addEntry={addEntry} />
        <EntryTable logEntries={logEntries} removeEntry={removeEntry} />
      {deleteClicked && <Modal setConfirmDelete={setConfirmDelete} setDeleteClicked={setDeleteClicked} removeEntry={removeEntry} />}
      </div>
    )
  }