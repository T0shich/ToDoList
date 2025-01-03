import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './pages/List'
import './styles/App.css'
import Board from './pages/Вoard'
import SideBar from './components/SideBar'
import MyImage from './images/image.png'

function App() {
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='AppContainer'>
					{' '}
					{/* Добавляем контейнер для флекс-выравнивания */}
					<div className='Sidebar'>
						<button onClick={toggleSidebar} className='open-sidebar-btn'>
							{isSidebarOpen ? (
								'Закрыть меню'
							) : (
								<img src={MyImage} alt='Описание изображения' />
							)}
						</button>

						<SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
					</div>
					<div className='MainContent'>
						{' '}
						{/* Разделяем Sidebar и MainContent */}
						<Routes>
							<Route path='/list' element={<List />} />
							<Route path='/board' element={<Board />} />
							<Route path='*' element={<Board />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
