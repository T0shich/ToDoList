import React from 'react'
import UniversalButton from './UniversalButton'
const InputModal = ({
	title,
	text,
	setTitle,
	setText,
	addNewTask,
	onClose,
}) => {
	return (
		<div className='model'>
			<div className='modal_content'>
				<h2>Добавьте задачу</h2>
				<div className='modal_message'>
					<input
						value={title}
						onChange={e => setTitle(e.target.value)}
						type='text'
						placeholder='Название задачи'
					/>
					<input
						value={text}
						onChange={e => setText(e.target.value)}
						type='text'
						placeholder='Содержание задачи'
					/>
				</div>
				<div className='ModalBut'>
					<UniversalButton onClick={addNewTask}>Создать задачу</UniversalButton>
					<UniversalButton onClick={onClose}>Закрыть</UniversalButton>
				</div>
			</div>
		</div>
	)
}

export default InputModal
