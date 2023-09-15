/* eslint-disable react/prop-types */
// import { useState } from "react"
import { logEntries } from "./data"
import FilterableEntryTable from "./Components/FilterableEntryTable"
import './styles.css'

export default function App() {
  return (
    <FilterableEntryTable entries={logEntries} />
  )
}
