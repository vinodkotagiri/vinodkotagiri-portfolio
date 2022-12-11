import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../../assets/svg/meter1.svg'
import meter2 from '../../assets/svg/meter2.svg'
import SkillItem from '../SkillItem'
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
}
export default function SkillCarousel() {
	return (
		<Carousel responsive={responsive} infinite={true} className='skill-slider'>
			<SkillItem image={meter2} title='Web Design' />
			<SkillItem image={meter1} title='Frontent Development' />
			<SkillItem image={meter1} title='Backend Development' />
			<SkillItem image={meter1} title='Maintenance' />
			<SkillItem image={meter1} title='Project Management' />
		</Carousel>
	)
}
