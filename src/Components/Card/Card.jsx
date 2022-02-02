import React from 'react'
import './Card.styles.css'

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.cat.id}?set=set4`} alt="cat figures" />
            <h1>{props.cat.name}</h1>
        </div>
    )
}