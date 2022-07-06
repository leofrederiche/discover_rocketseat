import "./styles.css"

import { Card } from "../../components/Card"

export function Home() {
  return (
    <div className="form">
      <h1>Presence List</h1>

      <input type="text" placeholder="Name" />
      <button>Include</button>

      <Card name="Leonardo" time="23:17:12"/>
      <Card name="Maria Eduarda" time="22:15:11" />
    </div>
  )
}
