import React from 'react'
import { Link} from 'react-router-dom'
import UniversalButton from './UniversalButton'
const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			<UniversalButton onClick={toggleSidebar} className='close-btn'>
				&times;
			</UniversalButton>
			<ul>
				<li>
					<Link  to='/board'>Доска задач</Link>
				</li>
				<li>
					<Link  to='/list'>Список дел</Link>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
