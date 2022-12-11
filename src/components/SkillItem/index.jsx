import React from 'react'
import './style.css'
export default function SkillItem({ image, title }) {
	return (
		<div className='item'>
			<img src={image} alt='skill-title' />
			<h5>{title}</h5>
		</div>
	)
}
