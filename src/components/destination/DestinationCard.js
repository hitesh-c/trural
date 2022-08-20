import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import React from 'react'
import "./Destination.css"


/* ----------------

Need to reconsider the card style, Instructions sent on discord

*/
function parseReviews(text){
    let dex2 = text.indexOf(')');
    let dex1 = text.indexOf('(');
    let star = text.substring(0, dex1).trim();
    let number = text.substring(dex1+1, dex2);
    return {star, number}
}

export const DestinationCard = ({data}) => {
    let review = parseReviews(data.star);
    return (
        // <Card style={{ width: '16rem', height: '15rem', background: "rgba(0,0,0,0.4)", borderRadius: "22px"}} className="img-fluid">
        //     <Card.Img style={{ height: '15rem'}}variant="top" src={data.image}/>
        //     <Button className="bg-transparent booking">{data.name}</Button>

        //     <Card.Body> 
        //         {/* <Card.Text>
        //             {data.extractFewWords(data.description)}
        //         </Card.Text> */}
        //         <div style={{display: "flex", justifyContent: "space-around"}}>
        //         <Button variant="warning">Book Now</Button>
        //         <Button variant="light">Details</Button>
        //         </div>

        //     </Card.Body>
        // </Card>
        // <Row>
        //     <Col lg={3}></Col>
        //     <Col lg={8}>
        //     <h2>{data.title}</h2>
        //     <h3>Village Name : {data.village}</h3>
        //     </Col>
        //     <Col>
        //         <div>
        //             {`${review.number} reviews`}
        //         </div>
                
        //     </Col>
        // </Row>
        <div className="fpItem" style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <img
          src={data.image}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{data.title}</span>
        <span className="fpCity" style={{color: "black"}}>{data.village}</span>
        <span className="fpPrice">{`$${data.dollars}`}</span>
        <div className="fpRating">
          <button>{review.star}</button>
          <span>
            {review.star> 4.5 && 'Excellent'}
            {review.star> 4.0 && review.star<=4.5 && 'Very Good'}
            {review.star>3.0 && review.star<=4.0 && 'Average'}
            {review.star<=3.0 && "Poor"}
          </span>
        </div>
      </div>
    )
}
