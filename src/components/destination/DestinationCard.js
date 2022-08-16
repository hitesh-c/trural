import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

export const DestinationCard = ({data}) => {
    return (
        <Card style={{ width: '18rem', display: 'inline-block', }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.extractFewWords(data.description)}
                </Card.Text>
                <Button variant="success">Search house</Button>
            </Card.Body>
        </Card>
    )
}
