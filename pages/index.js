import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const numOfItemsRemaining = todos.filter(todo => todo.completed === false).length

  const numOfItemsCompleted = todos.length - numOfItemsRemaining;

  useEffect(() => {
    filterHandler();
  }, [todos, status]) // rerun the function every time the 'todos' or 'status' state value changes

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>To Do App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <h1 className={styles.heading}>todos</h1>

      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setUserInput={setUserInput} 
        userInput={userInput}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
        numOfItemsCompleted={numOfItemsCompleted}
      /> 
    
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />

      <TodoFooter numOfItemsRemaining={numOfItemsRemaining} status={status} setStatus={setStatus} setTodos={setTodos} todos={todos} numOfItemsCompleted={numOfItemsCompleted} />
    </div>
  )
}
