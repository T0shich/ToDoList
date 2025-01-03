import React, { useState } from 'react'
import '../styles/App.css'
import '../styles/ModalWindow.css'
import TaskList from '../components/TaskList'
import InputModal from '../components/InputModal'
import ErrorModal from '../components/ErrorModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Sidebar.css'

function Board() {
	const [tasks, setTasks] = useState([])
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [error, setError] = useState(null)
	const [isSidebarOpen, setSidebarOpen] = useState(false)



	const addNewTask = e => {
		e.preventDefault()
		if (title && text) {
			const newTask = { id: tasks.length + 1, title, text }
			setTasks([newTask, ...tasks])
			setTitle('')
			setText('')
			setIsModalOpen(false)
		} else {
			setError('Поля не заполнены')
		}
	}

	const removeTask = taskId => {
		setTasks(tasks.filter(task => task.id !== taskId))
	}
	const closeErrorModal = () => {
		setError(null)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	return (
		<div className='Board'>
			<footer>
				<div className='MainBut'>
					<button className='image-button' onClick={openModal}>
						<span>+</span>
					</button>
				</div>
			</footer>

			<div className='container'>
				<div className='Tasks'>
					{isModalOpen && (
						<InputModal
							title={title}
							text={text}
							setTitle={setTitle}
							setText={setText}
							addNewTask={addNewTask}
							onClose={closeModal}
						/>
					)}
					{error && <ErrorModal message={error} onClose={closeErrorModal} />}
					<TaskList remove={removeTask} tasks={tasks} />
				</div>
			</div>
		</div>
	)
}

export default Board
