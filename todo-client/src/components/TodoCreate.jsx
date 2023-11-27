import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import axios from "axios";
import profile from "../assets/profile.png"
import { useRecoilState } from "recoil";
import {todoListState} from "../states/Atom"



const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
  background: #63e6be;
  }
  &:active {
  background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;

  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `
  }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;  //TodoTemplate position=relative
`;


//회색 박스 전체
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useRecoilState(todoListState);
  const [imageFile, setImageFile] = useState();

  const createTodo = async(e) =>{
    e.preventDefault();
    console.log("creating");

    const formData = new FormData();
    setImageFile(profile);
    // console.log(imageFile? "y":"n");

    formData.append("todoData", input);
    formData.append("file", imageFile);

    const response = await axios.post("/api/todos", formData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
    });

    console.log(response.data);

    //응답을 넘겨줘야 settodo로 새로 렌더링할텐데..
    setTodos((prev) => [...prev, response.data]);

    setInput("");
  };
  

  const onToggle = () => setOpen(!open);

  useEffect(()=>{
    // getTodos(); 
}, [setTodos]);


  return(
    <>
      {open && (
          <InsertFormPositioner>
              <InsertForm onSubmit={createTodo}>
                  <Input 
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)} 
                    placeholder='할 일을 입력 후, Enter 를 누르세요'
                  />
              </InsertForm>
          </InsertFormPositioner>
      )}

      <CircleButton onClick={onToggle} open={open}> 
      {/* 클릭하면 onToggle=true, open=false */}
          <MdAdd/>
      </CircleButton>
    </>
  )
}

export default TodoCreate;