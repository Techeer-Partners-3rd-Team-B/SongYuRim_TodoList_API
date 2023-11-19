import React, { useEffect, useState } from "react";
import axios from "axios";
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
    const [todos, setTodos] = useState();

    const getTodos = async()=>{
        await axios.get("/api/todos")
        .then((res)=>{
            setTodos(res.data.todos);
        })
    };

    const deleteTodo = async(id)=>{
        await axios.delete(`/api/todos/${id}`);
        const filterTodos = todos.filter((todo)=>todo.id !== id);
        setTodos(filterTodos);
    };

    //서버에 알려주는 데이터는 없고, 단순히 특정 todo의 데이터만 받아와서 done이 true인지, false인지를 업데이트하기위함? 그럼 응답done=false로 하면안되는거아닌가? 토글돼야..?
    const updateTodo = async (id)=>{
        const response = await axios.put(`/api/todos/${id}`);
        const updateTodos = todos.map((todo)=>
            todo.id === id? response.data : todo 
        );
        setTodos(updateTodo);
    }

    const createTodo = async(e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append()
    }

    useEffect(()=>{
        getTodos();
    }, []);

    return (
    <TodoListBlock>
        {todos.map((todo)=>{
            <TodoItem 
                id={todo.id} 
                done={todo.done} 
                text={todo.title} 
                deleteTodo={deleteTodo}
            />
        })}

    </TodoListBlock>
    );
}

export default TodoList;