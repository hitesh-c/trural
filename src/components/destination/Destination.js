import React from 'react'
import locations from '../../fakeData/index'
import { DestinationCard } from './DestinationCard';
import VillageCard from './VillageCard';
import SearchComponent from './SearchComponent';
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
        <Row>
            <Col sm={12} lg={2}>
            {/* search */}
            <SearchComponent></SearchComponent>
            </Col>
            <Col>
            <Row style={{height: "300px"}}>
                {
                    locations.map((item)=>{
                        return(
                            <VillageCard data={item}></VillageCard>
                        )
                    })
                }
            </Row>
            <Row>Destination card</Row>
            </Col>
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

            {/* <h1>See Discord for instructions.</h1> */}

        </Row>
    )
}
