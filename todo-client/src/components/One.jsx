import React from "react";
import styled from "styled-components";

const OneBlock = styled.div`
    text-align: center;
    margin: 50px;
`;


function One(){
    return (
        <OneBlock><h1> router-test </h1></OneBlock>
    )
}

export default One;