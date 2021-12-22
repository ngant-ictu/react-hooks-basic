import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import TodoList from '../components/TodoList'

export default function Home() {
  const [ todoList, setTodoList ] = useState([
    { id: 0, title: 'Co gang len' },
    { id: 1, title: 'Lam sao de tu tin nhat khi di lam' },
    { id: 2, title: 'Lam sao de dong nghiep than thien voi minh hon' }
  ])

  function handleTodoClick(todo) {
    console.log(todo);

    const Index = todoList.findIndex(x => x.id === todo.id);
    if(Index < 0) return;
    
    const newTodoList = [...todoList];
    newTodoList.splice(Index, 1);
    setTodoList(newTodoList);
  }

  return (

    <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    // <ColorBox />
  )
}
