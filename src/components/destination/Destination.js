import React from 'react'
import locations from '../../fakeData/index'
import { DestinationCard } from './DestinationCard';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';

export const Destination = () => {
    const fakeData = locations[0];
    const extractFewWords = (text)=>{
        //Extracts first 80 characters from a text and adds ... after it
        if(text.length>80){
            return `${text.substring(0,80)}...`;
        }else{
            return text;
        }
    }
    return (
        <Container className="pr-0 mt-5 pt-5">
             {/* <Row>
            {
                locations.map((item)=>{
                    return(
                        <Col sm={4} xl={4}>
                        <DestinationCard data={{...item, extractFewWords}}/>
                        </Col>
                    )
                })}

            
            </Row> */}

            <h1>See Discord for instructions.</h1>

        </Container>
    )
}
