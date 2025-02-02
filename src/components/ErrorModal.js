import React from 'react'
import UniversalButton from './UniversalButton'
const ErrorModal = ({ message, onClose }) => {
	return (
		<div className='top'>
			<div className='model'>
				<div className='modal_content'>
					<h2>Error</h2>
					<div className='modal_message'>
						<p>{message}</p>
					</div>
					<div className='ModalBut'>
						<UniversalButton onClick={onClose}>Закрыть</UniversalButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ErrorModal
