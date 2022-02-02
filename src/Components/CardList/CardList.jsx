import React from 'react'
import './CardList.styles.css'
import Card from '../Card/Card'

export default function CardList(props) {
    return (
        <div className="card-list">
            {props.cats.map(cat => (
                <Card key={cat.id} cat={cat} />
            ))}
        </div>
    )
}