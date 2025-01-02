import React from 'react'
import Tasks from './Tasks'

const TaskList = ({ tasks, remove }) => {
	return (
		<div className='task-list'>
			{tasks.map(task => (
				<Tasks key={task.id} {...task} remove={remove} />
			))}
		</div>
	)
}

export default TaskList
