import { Container, Row, Col, Button } from 'react-bootstrap'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRightCircle, CloudDownload } from 'react-bootstrap-icons'
import heroImg from '../../assets/svg/robot-img.svg'
import './styles.css'
export default function Home() {
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
						<Row>
							<Col md={3} className='align-items-center justify-content-center'>
								<Button href='#portfolio' variant='outline-secondary' style={{ width: '150px' }}>
									Portfolio
									<ArrowRightCircle size={25} />
								</Button>
							</Col>
							<Col md={4}>
								<Button
									href='#portfolio'
									variant='info'
									style={{ width: '150px' }}
									onClick={() => window.open('https://1drv.ms/w/s!AqUO-r5Zn68aie5NhyJZFOt7JSdtBw?e=t6AAKt', '_blank')}>
									Resume
									<CloudDownload size={25} />
								</Button>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={heroImg} alt='hero-img' />
					</Col>
				</Row>
			</Container>
		</section>
	)
}
