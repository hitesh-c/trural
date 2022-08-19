import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Destination.css"

const VillageCard = ({ data }) => {
    return (
        <div style={{ padding: "2px"}}>
            <Card style={{ width: '16rem', height: '15rem', background: "rgba(0,0,0,0.4)", borderRadius: "22px" }} className="img-fluid">
                <Card.Img style={{ height: '15rem' }} variant="top" src={data.image} />
                <Button className="bg-transparent booking">{data.name}</Button>

                <Card.Body>
                    <div style={{ display: "flex", justifyContent: "space-around", height: "fit-content" }}>
                        <Button variant="warning">Show Houses</Button>
                        <Button variant="light">Details</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default VillageCard