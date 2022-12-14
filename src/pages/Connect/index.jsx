import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import connectImg from '../../assets/svg/conect.svg'
import emailjs from '@emailjs/browser'
import './styles.css'
export default function Connect() {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	}
	const [formData, setFormData] = useState(initialState)
	const [buttonText, setButtonText] = useState('Send')
	const [status, setStatus] = useState({})

	function handleSubmit(e) {
		e.preventDefault()
		console.log(formData)
		const { firstName, lastName, email, phone, message } = formData
		emailjs
			.send(
				'service_kjuek39',
				'template_5q6k0l7',
				{
					firstName,
					lastName,
					email,
					phone,
					message,
				},
				'srHBL7gISQA2U302c'
			)
			.then(
				function (response) {
					setStatus({ status: true, message: 'Email Sent Successfully' })
					setButtonText('Sent')
					setTimeout(() => {
						setStatus({})
						setButtonText('Send')
					})
				},
				function (error) {
					setStatus({ status: false, message: 'Error sending message' })
				}
			)
		setFormData(initialState)
	}
	return (
		<section id='connect' className='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col md={6}>
						<img src={connectImg} alt='connect' />
					</Col>
					<Col md={6}>
						<h2>Get In Touch</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className='px-1'>
									<input
										type='text'
										value={formData.firstName}
										name='firstName'
										placeholder='First Name'
										onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
									/>
								</Col>
								<Col sm={6} className='px-1'>
									<input
										type='text'
										value={formData.lastName}
										name='lastName'
										placeholder='Last Name'
										onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
									/>
								</Col>
								<Col sm={6} className='px-1'>
									<input
										type='email'
										value={formData.email}
										name='email'
										placeholder='Email Address'
										onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
									/>
								</Col>
								<Col sm={6} className='px-1'>
									<input
										type='text'
										value={formData.phone}
										name='phone'
										placeholder='Phone Number'
										onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
									/>
								</Col>
								<Col>
									<textarea
										rows={6}
										value={formData.message}
										name='message'
										placeholder='Message'
										onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}></textarea>
									<button type='submit'>
										<span>{buttonText}</span>
									</button>
								</Col>
								{status.message && (
									<Col>
										<p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
									</Col>
								)}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
