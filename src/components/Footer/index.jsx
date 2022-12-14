import { Container, Row, Col } from 'react-bootstrap'
// import { MailchimpForm } from './MailchimpForm'
import logo from '../../assets/svg/logo.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import github from '../../assets/svg/gitHub.svg'
import medium from '../../assets/svg/medium.svg'
import './styles.css'
export const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-items-center'>
					{/* <MailchimpForm /> */}
					<Col md={4} xs={12} className='logo-wrapper'>
						<img src={logo} alt='Logo' />
					</Col>
					<Col md={4} xs={12}>
						<p>
							&copy;2022. All Rights Reserved&emsp;<span className='author'>vinodkotagiri@icloud.com</span>
						</p>
					</Col>
					<Col md={4} xs={12} className='text-center text-sm-end'>
						<div className='social-icon-f'>
							<a href='https://www.linkedin.com/in/kotagiri-vinod-a10ba856' target='_blank' rel='noreferrer'>
								<img src={linkedin} alt='' />
							</a>
							<a href='https://www.github.com/vinodkotagiri' target='_blank' rel='noreferrer'>
								<img src={github} alt='' />
							</a>
							<a href='https://www.medium.com/@vinodkotagiri' target='_blank' rel='noreferrer'>
								<img src={medium} alt='' />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
