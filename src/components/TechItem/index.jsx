import React from 'react'
import './styles.css'
export default function TechItem({ logo, name, color }) {
	return (
		<div className='tech-item'>
			<img src={logo} alt='name' />
			<small style={{ color: color }}>{name}</small>
		</div>
	)
}
