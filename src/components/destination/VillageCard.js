import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Destination.css"

const VillageCard = ({ data }) => {
    return (
        <div style={{ padding: "2px"}}>
            <div style={{ width: '16rem', height: '15rem', background: "rgba(0,0,0,0.4)", borderRadius: "22px" }} className="img-fluid">
                <Card.Img style={{ height: '15rem' }} variant="top" src={data.image} />
                <Button className="bg-transparent booking">{data.name}</Button>

                <div style={{padding: "10px"}}>
                    
                    <div style={{ display: "flex", justifyContent: "space-around"}}>
                        <Button variant="warning">Show Houses</Button>
                        <Button variant="light">Details</Button>
                    </div>

                </div>
            </div>
            <div style={{height: "60px"}}></div>
        </div>
    )
}

export default VillageCard