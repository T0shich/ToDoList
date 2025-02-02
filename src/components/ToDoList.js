import React from 'react'
import UniversalButton from './UniversalButton'
const ToDoList = ({
	input,
	setInput,
	todolist,
	addTask,
	completeTask,
}) => {
	return (
		<div>
			<div className='main_input'>
				<input
					value={input}
					onChange={e => setInput(e.target.value)}
					type='text'
					placeholder='Напишите задачу'
				/>
				<UniversalButton onClick={addTask}>Добавить</UniversalButton>
			</div>
			<div className='task-container'>
				{todolist.map((task, index) => (
					<div key={index} className='task-item'>
						<span>{task.text}</span>
						<button onClick={() => completeTask(index)}>-</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default ToDoList
