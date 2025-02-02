import React from 'react'
import classes from './UniversalButton.module.css'

const UniversalButton = props => {
	return (
		<button className={classes.universal} {...props}>
			{props.children}
		</button>
	)
}

export default UniversalButton
