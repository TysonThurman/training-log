/* eslint-disable react/prop-types */
import EntryForm from "./EntryForm"
import EntryTable from "./EntryTable"

export default function FilterableEntryTable({entries}) {
    return(
      <div>
        <EntryForm />
        <EntryTable entries={entries} />
      </div>
    )
  }