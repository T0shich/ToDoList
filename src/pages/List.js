import React, { useState } from 'react'
import ToDoList from '../components/ToDoList';
import '../styles/ToDolist.css'

const List = () => {
  const [input, setInput] = useState('')
   const [todolist, setToDoList] = useState([])
  

  const addTask = () =>{
    if(input.trim()){
      setToDoList([...todolist, {text: input , completed:false}]);
      setInput('');
    }
  };

  const completeTask = (index) => {
    setToDoList(todolist.filter((_, i) => i !== index))
  };
  return (
		<div style={{ textAlign: 'center' }}>
			<h2>Добавьте задачу</h2>
			<ToDoList
				input={input}
				setInput={setInput}
				todolist={todolist}
				addTask={addTask}
				completeTask={completeTask}
			/>
		</div>
	)
}

export default List
