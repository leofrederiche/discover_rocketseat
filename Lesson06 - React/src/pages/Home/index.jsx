import React, { useState } from "react"
import "./styles.css"

import { Card } from "../../components/Card"

export function Home() {
  const [name, setName] = useState('')
  const [students, setStudents] = useState([])

  function handleAddStudent() {
    let time = new Date

    const newStudent = {
      name,
      time: time.toLocaleTimeString()
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <div className="form">
      <h1>Presence List</h1>

      <input 
        type="text" 
        placeholder="Name"
        onChange={ e => setName(e.target.value) }
      />
      <button
        onClick={handleAddStudent}
      >
        Include
      </button>

      {
        students.map( (student, index) => (
          <Card key={index} name={student.name} time={student.time} />
        ))
      }
    </div>
  )
}
