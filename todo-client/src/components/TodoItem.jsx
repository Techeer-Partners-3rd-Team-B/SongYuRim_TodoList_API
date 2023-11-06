import React from "react";
import styled, {css} from "styled-components";
import {MdDone, MdDelete} from "react-icons/md";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: 24px;
    cursor:pointer;
    &:hover{
        color:#ff6b6b;
    }
    display:none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;

    //TodoItemBlock 위에 커서가 있을 때, Remove 컴포넌트를 보여줌
    &:hover{
        ${Remove}{
            display:initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center; //상하
    justify-content: center; //좌우
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
        `}
    `;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${
        props=>
        props.done &&
        css`
            color:#ced4da;
        `}
`;

function TodoItem({id, done, text}) {
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle> {/* done==true이면 체크표시 나오도록 */}
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;