import React, { useState } from 'react'

const Calendar = () => {
	const [date, setDate] = useState(new Date())

	const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

	const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

	const handlePrevMonth = () => {
		setDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))
	}

	const handleNextMonth = () => {
		setDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))
	}

	const renderDays = () => {
		const year = date.getFullYear()
		const month = date.getMonth()
		const firstDay = getFirstDayOfMonth(year, month) || 7 // Воскресенье — последний день
		const totalDays = daysInMonth(year, month)

		const days = []
		for (let i = 1; i < firstDay; i++) {
			days.push(<div key={`empty-${i}`} className='day empty'></div>)
		}

		for (let day = 1; day <= totalDays; day++) {
			const isToday =
				day === new Date().getDate() &&
				month === new Date().getMonth() &&
				year === new Date().getFullYear()

			days.push(
				<div key={day} className={`day ${isToday ? 'today' : ''}`}>
					{day}
				</div>
			)
		}

		return days
	}

	return (
		<div className='calendar'>
			<div className='header'>
				<button onClick={handlePrevMonth}>&lt;</button>
				<h2>
					{date.toLocaleString('ru-RU', {
						month: 'long',
						year: 'numeric',
					})}
				</h2>
				<button onClick={handleNextMonth}>&gt;</button>
			</div>
			<div className='weekdays'>
				{['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
					<div key={index} className='weekday'>
						{day}
					</div>
				))}
			</div>
			<div className='days'>{renderDays()}</div>
		</div>
	)
}

export default Calendar
