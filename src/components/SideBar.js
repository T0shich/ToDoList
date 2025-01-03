import React from 'react'
import { Link} from 'react-router-dom'

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			<button onClick={toggleSidebar} className='close-btn'>
				&times;
			</button>
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
