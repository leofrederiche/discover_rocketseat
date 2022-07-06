import "./styles.css"

export function Card(props) {
    return (
        <div className="card">
            <strong className="name">{ props.name }</strong>
            <small className="time">{ props.time }</small>
        </div>
    )
}