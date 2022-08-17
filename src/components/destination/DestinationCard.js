import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./Destination.css"
export const DestinationCard = ({data}) => {
    return (
        <Card style={{ width: '18rem', display: 'inline-block', margin: "2px", background: "rgba(0,0,0,0.4)", borderRadius: "22px"}}>
            <Card.Img variant="top" src={data.image}/>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.extractFewWords(data.description)}
                </Card.Text>
                <Button variant="danger">Search house</Button>
            </Card.Body>
        </Card>
    )
}
