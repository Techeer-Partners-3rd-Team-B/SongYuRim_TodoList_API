import {Outlet } from "react-router-dom";
import './App.css';
import React, { Component } from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import createTodo from './components/TodoList'
import { RecoilRoot, RecoilState } from "recoil";
import TodoItem from "./components/TodoItem";


const GlobalStyle = createGlobalStyle`
  body {
    // 페이지에 회색배경
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <RecoilRoot>
      <GlobalStyle/> {/* styled-components로 css적용 */}
      <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
          <Outlet/>
      </TodoTemplate>
    </RecoilRoot>
    </>
  );
}

export default App;
