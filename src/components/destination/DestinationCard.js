import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./Destination.css"


/* ----------------

Need to reconsider the card style, Instructions sent on discord

*/

export const DestinationCard = ({data}) => {
    return (
        <Card style={{ width: '16rem', height: '15rem', background: "rgba(0,0,0,0.4)", borderRadius: "22px"}} className="img-fluid">
            <Card.Img style={{ height: '15rem'}}variant="top" src={data.image}/>
            <Button className="bg-transparent booking">{data.name}</Button>

            <Card.Body>
                {/* <Card.Text>
                    {data.extractFewWords(data.description)}
                </Card.Text> */}
                <div style={{display: "flex", justifyContent: "space-around"}}>
                <Button variant="warning">Book Now</Button>
                <Button variant="light">Details</Button>
                </div>

            </Card.Body>
        </Card>
    )
}
