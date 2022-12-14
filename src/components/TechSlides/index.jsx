import React from 'react'
import { techs } from './techs'
import TechItem from '../TechItem'
import './styles.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 10,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 4,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
}

export default function TechSlides() {
	return (
		<div className='techs'>
			<h3>Technologies</h3>
			<Carousel responsive={responsive} infinite={true} className='skill-slider'>
				{techs.map((tech, index) => (
					<TechItem key={index} name={tech.name} logo={tech.logo} color={tech.color} />
				))}
			</Carousel>
		</div>
	)
}
