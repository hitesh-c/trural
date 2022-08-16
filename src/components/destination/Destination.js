import React from 'react'
import locations from '../../fakeData/index'
import { DestinationCard } from './DestinationCard';
import Container from 'react-bootstrap/esm/Container';
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
        <Container>
            {
                locations.map((item)=>{
                    return(
                        <DestinationCard data={{...item, extractFewWords}}/>
                    )
                })
            }
            
        </Container>
    )
}
