import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1; //자신이 차지 할 수 있는 영역을 꽉 채우도록
    padding: 20px 32px;
    padding-bottom:48px;
    overflow-y: auto; //내용잘림, 필요할때 스크롤바
    // background: gray;
`;

function TodoList(){
    return (
    <TodoListBlock>
        <TodoItem text="파트너스 과제" done={true}/>
        <TodoItem text="졸작 기능정의" done={false}/>
        <TodoItem text="css 공부" done={false}/>

    </TodoListBlock>
    );
}

export default TodoList;