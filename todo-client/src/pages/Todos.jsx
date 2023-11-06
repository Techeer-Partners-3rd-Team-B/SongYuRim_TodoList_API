import TodoTemplate from '../components/TodoTemplate';
import React from "react";
import {styled, createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    // 페이지에 회색배경
    background: #e9ecef;
  }
`;

const TestBlock = styled.div`
    text-align: center;
    margin: 50px;
`;


function Test(){
    return(
        <>
            <GlobalStyle/>
            <TestBlock>
                    <TodoTemplate><h1> Test page </h1></TodoTemplate>
            </TestBlock>
        </>
    )
}

export default Test;