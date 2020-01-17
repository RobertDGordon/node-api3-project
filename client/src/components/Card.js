import React from 'react'
import { Link } from "react-router-dom";
import styled, {keyframes} from 'styled-components'
import {flipInY} from 'react-animations'

const flipAnim = keyframes`${flipInY}`

let test = `1000ms`

const Card = styled.div`
    animation-duration: ${test};
    animation-name: ${flipAnim};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 0 15px;
    width: 250px;
    height: 50px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 18px;
    color: gray;
    span{ 
        font-weight: bold;
        color: darkgreen;
    }
    a{
        text-decoration: none;
    }

`

const PlayerCard = (props) => {

    test = `${props.id}ms`

    return(
        <>
        <Link to={`/user/${props.id}`}>
        <Card>
            <p><span>Name:</span> {props.name}</p>
        </Card>
        </Link>
        </>
    )
}

export default PlayerCard