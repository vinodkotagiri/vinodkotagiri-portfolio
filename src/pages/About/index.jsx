import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './styles.css'
import myImg from '../../assets/img/vinu_full_webp.png'
export default function About() {
	return (
		<section className='about' id='about'>
			<Container>
				<div className='about-bx'>
					<h2>About Me</h2>
					<Row className='content-wrapper'>
						<Col xs={12} md={6}>
							<div className='img-wrapper'>
								<img src={myImg} alt='my-img' />
							</div>
						</Col>
						<Col xs={12} md={6}>
							<p>
								I am a goal-oriented professional with skills in project management and building applications. My
								dexterity lies in both front and back-end coding and in translating Wireframes and PSD Designs into
								functional web apps using HTML5, AngularJS, React, Node.js, Mongo. I am proficient at designing user
								interactions on websites, developing servers, and databases for website functionality, and coding for
								mobile platforms.
							</p>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	)
}
