/* eslint-disable react/prop-types */
// import { useState } from "react"
// import { useEffect, useState } from "react";
import FormAndTable from "./Components/FormAndTable"
import './styles.css'

export default function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, [])


  return (
    <>
    {/* <p>{!data ? "Loading..." : data}</p> */}
    <FormAndTable />
    </>
  )
}
