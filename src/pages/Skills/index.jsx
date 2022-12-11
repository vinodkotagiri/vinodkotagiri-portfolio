import React from 'react'
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import SkillCarousel from '../../components/SkillCarousel'
import TechSlides from '../../components/TechSlides'
export default function Skills() {
	return (
		<section id='skill' className='skill'>
			<Container>
				<Row>
					<Col>
						<div className='skill-bx'>
							<h2>Skills</h2>
							<p>
								Skillful designing, and building Front End UI with different JavaScript Libraries. Good at building
								RESTful and GraphQL APIs for the backend requirement implemented mainly on NodeJS and Python utilizing
								MySQL and MongoDB.
							</p>
							<SkillCarousel />
							<TechSlides />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
