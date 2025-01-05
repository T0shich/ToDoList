import React from 'react'

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
				<button onClick={addTask}>Добавить</button>
			</div>
			<div className='task-container'>
				{todolist.map((task, index) => (
					<div key={index} className='task-item'>
						<span>{task.text}</span>
						<button onClick={() => completeTask(index)}>+</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default ToDoList
