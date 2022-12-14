import { Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import heroImg from '../../assets/svg/hero-img.svg'
import { Link } from 'react-router-dom'
import './styles.css'
export default function Home() {
	let texts = ['Web Developer', 'MERN stack Developer', 'Full Stack Developer', 'Web Designer']

	return (
		<section className='banner' id='home'>
			<Container>
				<Row>
					<Col xs={12} md={6} xl={7}>
						<h1>Hi There!</h1>
						<br />
						<h1 className=''>I'm Vinod Kotagiri</h1>
						<h2 className='typed tagline'>
							<TypeAnimation
								sequence={[
									'A Full Stack Developer',
									2000,
									'A MERN Stack Developer',
									2000,
									'A Web Designer',
									2000,
									() => {
										console.log('Done typing!') // Place optional callbacks anywhere in the array
									},
								]}
								wrapper='div'
								cursor={true}
								repeat={Infinity}
								style={{ fontSize: '2em' }}
							/>
						</h2>
						<p>
							A Fullstack developer with experience in designing and developing modern, responsive, scalabale and
							maintainable web applications.
						</p>
						<a href='#portfolio'>
							Portfolio
							<ArrowRightCircle size={25} />
						</a>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={heroImg} alt='hero-img' />
					</Col>
				</Row>
			</Container>
		</section>
	)
}
