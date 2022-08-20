import React from 'react'
import locations from '../../fakeData/index'
import { DestinationCard } from './DestinationCard';
import VillageCard from './VillageCard';
import SearchComponent from './SearchComponent';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Destination.css'

export const Destination = () => {
    const fakeData = locations[0];
    const extractFewWords = (text) => {
        //Extracts first 80 characters from a text and adds ... after it
        if (text.length > 80) {
            return `${text.substring(0, 80)}...`;
        } else {
            return text;
        }
    }
    return (
        <Row style={{ margin: "4px 0px" }}>
            <Col md={4} lg={2} sm={12}>
                {/* search */}
                <SearchComponent></SearchComponent>
            </Col>
            <Col>
                <Row>
                    {
                        locations.map((item) => {
                            return (
                                <Col sm={6} xl={2} >
                                    <VillageCard data={item}></VillageCard>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row className='fp'>
                        {

                            locations[0].hotels.map(item =>
                                <Col sm={3} md={3} xl={2}>
                                <DestinationCard data={{ ...item, village: locations[0].name }} style={{padding: "4px 0px"}}></DestinationCard>
                                </Col>
                            )
                        }
                    
                </Row>
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
