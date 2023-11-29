import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useRecoilState } from "recoil";
import {todoListState} from "../states/Atom"

const TodoListBlock = styled.div`
    flex: 1; //자신이 차지 할 수 있는 영역을 꽉 채우도록
    padding: 20px 32px;
    padding-bottom:48px;
    overflow-y: auto; //내용잘림, 필요할때 스크롤바
    // background: gray;
`;

function TodoList(){
    // const setTodos = useRecoilState(editTodo);
    const [todos, setTodos] = useRecoilState(todoListState);

    const getTodos = async()=>{
        await axios.get("/api/todos")
        .then((res)=>{
            setTodos(res.data.todos);
            // console.log(todos);
        })
        .catch((e)=>{
            console.log(e);
        })
    };

    useEffect(()=>{
        getTodos();
    }, [setTodos]);

    return (
    <TodoListBlock>
        {todos.map((todo)=>(

            <TodoItem
                key={todo.id} 
                id={todo.id} 
                done={todo.done} 
                text={todo.title} 
                // deleteTodo={deleteTodo}
            />

        ))}

    </TodoListBlock>
    );
}

export default TodoList;