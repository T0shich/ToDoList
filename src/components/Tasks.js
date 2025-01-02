import React from 'react'

const Tasks = (props) => {
	return (
			
			<div className='task'>
				<div className='task_content'>
					<div className="text">
					<h4>
						{props.id}. {props.title}
					</h4>
					<div className='task-text'>{props.text}</div>
					</div>
				</div>
				<div className='task_butt'>
					<button onClick={() => props.remove(props.id)}>Delete</button>
				</div>
			</div>
	)
}

export default Tasks
