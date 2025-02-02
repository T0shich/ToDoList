import React from 'react'
import UniversalButton from './UniversalButton'
const Tasks = props => {
	return (
		<div className='task'>
			<div className='task_content'>
				<div className='text'>
					<h4>
						{props.id}. {props.title}
					</h4>
					<div className='task-text'>{props.text}</div>
				</div>
			</div>
			<div className='task_butt'>
				<UniversalButton onClick={() => props.remove(props.id)}>Delete</UniversalButton>
			</div>
		</div>
	)
}

export default Tasks
